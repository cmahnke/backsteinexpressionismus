import sys, os
import re
import requests
import json
from pathlib import Path
import logging
import yaml
from transformers import BlipProcessor, BlipForConditionalGeneration
import torch
from lib.metadata import Hugo, Wikidata, Captions


rel_mod_path = "../../../themes/projektemacher-base/scripts/"
sys.path.append(os.path.join(rel_mod_path, "PyHugo"))
from content import Post, Content

logging.basicConfig(level=os.environ.get("LOG_LEVEL", "INFO"))
log = logging.getLogger(__name__)
default_config_file = "./conf/config.yaml"

def load_config(config_file = default_config_file):
    try:
        with open(config_file, 'r', encoding='utf-8') as f:
            config = yaml.safe_load(f)
            return config
    except FileNotFoundError:
        print(f"Error: Configuration file '{config_file}' not found.")
        return
    except (json.JSONDecodeError, yaml.YAMLError) as e:
        print(f"Error parsing configuration file '{config_file}': {e}")
        return

    try:
        level = logging.getLevelName(config["logging"]["level"])
        log.setLevel(level)
    except NameError:
        pass

def collect_metadata(image_path):
    image_meta = os.path.splitext(image_path)[0] + ".json"
    if os.path.exists(image_meta):
        log.debug(f"Skipping {filename}, metadata file exists")

    caption = Captions.gen_captions(image_path, image_meta)
    log.debug(f"Generated initial caption for {image_path}: {caption}")
    with open(image_meta, "w") as f:
        f.write(caption)

# This needs the path of the source post
def extract_meta(page_path):
    post = Post(page_path)
    tags = post.getTags()
    links = []
    ids = []
    qids = []
    if tags:
        post_links = Hugo.extract_links(post.getContent())
        if post_links is not None:
            links.extend(post_links)
        for tag, page in tags.items():
            if page.getMetadata() is not None and "archinformID" in page.getMetadata() and page.getMetadata()["archinformID"]:
                ids.append(page.getMetadata()["archinformID"])
            tag_links = Hugo.extract_links(page.getContent())
            if tag_links is not None:
                links.extend(tag_links)
    tags = list(tags.keys())
    links = list(set(links))
    for link in links:
        qids.append(Wikidata.get_wikipedia_qid(link))
    qids = [q for q in qids if q is not None]

    return {"tags": tags, "links": links, "ids": ids, "qids": qids}

def main():
    config = load_config()
    caption_model = config["enrichment"]["captions"]["model"]

    test_dir = Path("../../../content/post/architektur-und-bauplastik-der-gegenwart")


    print(extract_meta(test_dir))

if __name__ == "__main__":
    main()
