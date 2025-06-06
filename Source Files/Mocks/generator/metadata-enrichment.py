import sys, os
import re
import requests
import json
from pathlib import Path
import logging
import yaml
import markdown
from bs4 import BeautifulSoup
from transformers import BlipProcessor, BlipForConditionalGeneration

rel_mod_path = "../../../themes/projektemacher-base/scripts/"
sys.path.append(os.path.join(rel_mod_path, "PyHugo"))
from content import Post, Content

CAPTION_MODEL_ID = "Salesforce/blip-image-captioning-large"
processor = BlipProcessor.from_pretrained(CAPTION_MODEL_ID)
model = BlipForConditionalGeneration.from_pretrained(CAPTION_MODEL_ID).to("mps")

logging.basicConfig(os.environ.get("LOG_LEVEL", "INFO"))
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
        logging.getLevelName(config["logging"]["level"])
        log.setLevel(level)
    except NameError:
        pass


#See christianmahnke/layouts/_default/_markup/render-link.html
def get_wikipedia_qid(target_url):
    match = re.search(r"https://(..)\.wikipedia\.org/wiki/(.[^#]*)", target_url)
    if match:
        lang_code = match.group(1)
        article_title = match.group(2)
        query_url = f"https://{lang_code}.wikipedia.org/w/api.php?action=query&prop=pageprops&titles={article_title}&format=json"
        try:
            response = requests.get(query_url)
            response.raise_for_status()
            data = response.json()

            page_ids = list(data.get('query', {}).get('pages', {}).keys())

            if page_ids:
                page_meta = data['query']['pages'][page_ids[0]]
                qid = page_meta.get('pageprops', {}).get('wikibase_item')
                return qid
            else:
                log.error(f"Error: No pages found for URL {target_url}")
                return None
        except requests.exceptions.RequestException as e:
            log.error(f"Error: Unable to get remote resource {query_url}: {e}")
            return None
        except json.JSONDecodeError as e:
            log.error(f"Error: Unable to parse JSON response from {query_url}: {e}")
            return None
    else:
        log.error(f"Error: Provided URL does not match Wikipedia format: {target_url}")
        return None

def extract_links(md_content):
    links = []
    if md_content is None:
        return links
    html = markdown.markdown(md_content)
    soup = BeautifulSoup(html, 'html.parser')
    for a_tag in soup.find_all('a'):
        href = a_tag.get('href')
        if href:
            links.append(href)
    return links

def gen_captions(image, image_meta, trigger, decription):
    try:
        raw_image = Image.open(image_path).convert("RGB")
        inputs = processor(raw_image, return_tensors="pt").to("mps")
        out = model.generate(**inputs, max_new_tokens=50)
        caption = processor.decode(out[0], skip_special_tokens=True)

        return f"{caption}. {trigger}, {desription}."

    except Exception as e:
        print(f"Error processing {filename}: {e}")

def collect_metadata(image_path):
    image_meta = os.path.splitext(image_path)[0] + ".json"
    if os.path.exists(image_meta):
        log.debug(f"Skipping {filename}, metadata file exists")

    caption = gen_captions(image_path, image_meta)
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
        post_links = extract_links(post.getContent())
        if post_links is not None:
            links.extend(post_links)
        for tag, page in tags.items():
            if page.getMetadata() is not None and "archinformID" in page.getMetadata() and page.getMetadata()["archinformID"]:
                ids.append(page.getMetadata()["archinformID"])
            tag_links = extract_links(page.getContent())
            if tag_links is not None:
                links.extend(tag_links)
    tags = list(tags.keys())
    links = list(set(links))
    for link in links:
        qids.append(get_wikipedia_qid(link))
    qids = [q for q in qids if q is not None]

    return {"tags": tags, "links": links, "ids": ids, "qids": qids}

def main():
    config = load_config()

    logging.getLogger().setLevel(logging.DEBUG)

    test_dir = Path("../../../content/post/architektur-und-bauplastik-der-gegenwart")


    print(extract_meta(test_dir))

if __name__ == "__main__":
    main()
