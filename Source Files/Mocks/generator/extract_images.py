import glob
import os
import json
import logging
import re
import sys
import logging
from pathlib import Path
import coloredlogs
from PIL import Image
#import jxlpy
from jxlpy import JXLImagePlugin
import smartcrop
import cv2
import numpy as np
import layoutparser as lp
from layoutparser.models import *
#from src.layoutparser.models.detectron2.layoutmodel import MyDetectron2LayoutModel
#from src.layoutparser.visualization import draw_box
import torch
#from src.util.layoutparser import detect_images_lp
##from lib.doctrlayout import DocTRLayout
##from lib.orientationlayout import OrientationLayout
import yaml

from lib import UltralyticsLayout, UltralyticsExtractor, UltralyticsClassifier, TesseractLayout, detect_orientation_doctr
from lib.util import opencv_to_pil
from lib.serialize import TrainingMetadata
from lib.images import ImageEnhancer, ImageFilter

wb = True

logging.basicConfig(level=os.environ.get("LOG_LEVEL", "INFO"))
coloredlogs.DEFAULT_LOG_FORMAT = '%(asctime)s [%(levelname)s] %(name)s [%(filename)s:%(lineno)d]: %(message)s'
coloredlogs.DEFAULT_FIELD_STYLES = {'asctime': {'color': 'green'}, 'hostname': {'color': 'magenta'}, 'levelname': {'bold': False, 'color': 'magenta'}, 'name': {'bold': True, 'color': 'blue'}, 'programname': {'color': 'cyan'}, 'username': {'color': 'yellow'}}
coloredlogs.DEFAULT_LEVEL_STYLES = {'critical': {'bold': True, 'color': 'red'}, 'debug': {'color': 'green'}, 'error': {'color': 'red'}, 'info': {'color': 'white'}, 'notice': {'color': 'magenta'}, 'spam': {'color': 'green', 'faint': True}, 'success': {'bold': True, 'color': 'green'}, 'verbose': {'color': 'blue'}, 'warning': {'color': 'yellow'}}
coloredlogs.install()
log = logging.getLogger(__name__)

default_config_file = "./conf/config.yaml"
#torch.serialization.add_safe_globals([Embedder])

def load_config(config_file = default_config_file):
    try:
        with open(config_file, 'r', encoding='utf-8') as f:
            config = yaml.safe_load(f)

    except FileNotFoundError:
        print(f"Error: Configuration file '{config_file}' not found.")
        return
    except (json.JSONDecodeError, yaml.YAMLError) as e:
        print(f"Error parsing configuration file '{config_file}': {e}")
        return
    level = logging.getLevelName(config["logging"]["level"])
    try:
        logging.getLogger().setLevel(level)
        coloredlogs.set_level(level)
        log.info(f"Set logging level for root logger to {logging.getLogger().level}")
    except NameError:
        print("Failed to change log level to {level}")
    return config

def find_files(directory, suffixes, base):
    files = []
    for ext in suffixes:
        files.extend(glob.glob(f"{directory}/**/*.{ext}", recursive=True))

    image_map = {}
    for file in files:
        file = Path(file)
        image_map[file] = file.relative_to(base).parent

    return image_map

def load_pil(in_file):
    return Image.open(in_file)

def main():
    log.info("Loading config...")
    config = load_config()

    suffixes = config["extraction"]["suffixes"]
    base_dir = Path(config["extraction"]["input"]["base"]).absolute()
    content_dir = base_dir.joinpath(config["extraction"]["input"]["content"])
    out_dir = Path(config["extraction"]["output"])

    if not out_dir.exists():
        os.makedirs(out_dir)
    images = find_files(content_dir, suffixes, base_dir)
    log.info("Collecting files")
    log.debug(f"Collected files:\n{images}")
    #prefix =
    for image_file, post_dir in images.items():
    #for image_file in images:
        suffix = "jpg" #path.suffix
        path = Path(image_file)
        prefix_key = path.parent.name.split("-")
        prefix = "".join(map(lambda p: p[:2], prefix_key)) + "".join(re.findall(r'\d+', path.parent.name))

        out_file = os.path.join(out_dir, f"{prefix}-{path.stem}.{suffix}")
        out_meta = os.path.join(out_dir, f"{prefix}-{path.stem}.json")

        log.info(f'Checking {image_file} for images')

        pil_image = load_pil(image_file)
        #cprint(detect_orientation_doctr(pil_image), "blue")

        #tl = TesseractLayout(pil_image, name=f"{image_file} -> {prefix}")
        #tl = DocTRLayout(pil_image)

        ul = UltralyticsLayout(pil_image, border=40)
        ul.check_orientation()
        #cprint(f"detected {tl.orientation}", 'green')
        log.info(f"Detected orientation for {image_file} is {ul.orientation}")
        meta = {"input_file": image_file, "orientation": ul.orientation}
        ul.detect()
        ul.filter("Picture")

        if len(ul.blocks()) == 0:
            log.info(f"Skipping {image_file}")
            continue

        if logging.DEBUG >= logging.root.level:
            cv_image = ul.debug()
            cv2.imwrite(out_file, cv_image)

        result_metas = []
        for i, block in enumerate(ul.blocks()):

            status = "accepted"
            block_image = ul.extract(i)

            filter = ImageFilter(block_image, config)
            if not filter:
                log.warning(f"Skipping image: '{prefix}-{path.stem}-{i}'")
                continue

            enhancer = ImageEnhancer(block_image)
            block_image = enhancer.process()
            block_image = Image.fromarray(block_image)
            #block_image = opencv_to_pil(block_image)

            uc = UltralyticsClassifier(block_image)
            uc.classify()
            out_file = os.path.join(out_dir, f"{prefix}-{path.stem}-{i}.{suffix}")
            try:
                score = uc.score()
            except ValueError as e:
                log.info(repr(e))
                status = "rejected"
            if score < .4:
                log.info(f'Skipping image {image_file} with detected classes {", ".join(uc.classification.keys())}')
                if logging.DEBUG >= logging.root.level:
                    status = "rejected"
                    out_file = os.path.join(out_dir, f"{prefix}-{path.stem}-{i}-{status}.{suffix}")
                else:
                    continue
            log.info(f'Processing image with detected classes {", ".join(uc.classification.keys())}')
            result_meta = {"out": out_file, "classification": uc.classification, "score":UltralyticsClassifier.calculate_score(uc.classification), "status": status}
            if i in ul.sub_image_meta:
                result_meta["rotation"] = ul.sub_image_meta[i]
            log.debug("Classification: %s", uc.classification)
            log.debug("Scores: %s", UltralyticsClassifier.calculate_score(uc.classification))

            log.info(f"Extracting detected image block into {out_file}")

            block_image.save(out_file)
            if status == "accepted":
                segments = []
                ue = UltralyticsExtractor(block_image)
                ue.annotate(log)
                #cprint(f"=> {json.dumps(ue.blocks(),default=lambda x: x.__dict__)}", "white")
                if logging.DEBUG >= logging.root.level:
                    cv_image = ue.debug()
                    out_file = os.path.join(out_dir, f"{prefix}-{path.stem}-{i}-annotated.{suffix}")
                    cv2.imwrite(out_file, cv_image)
                objects = ue.blocks()
                #cprint(map(lambda x: x.__dict__, objects), 'white')
                for j, block in enumerate(objects):
                    extract_image = ue.extract(j)
                    out_file = os.path.join(out_dir, f"{prefix}-{path.stem}-{i}-{j}-train.{suffix}")
                    extract_image.save(out_file)
                    segments.append({"type": block.type, "file": out_file})
                result_meta["segments"] = segments

            result_metas.append(result_meta)

        meta["source_post"] = post_dir
        meta["outputs"] = result_metas
        with open(out_meta, 'w', encoding='utf-8') as f:
            json.dump(meta, f, cls=TrainingMetadata, ensure_ascii=False, indent=4)


        continue

        cv_image = pil_to_opencv(pil_image)
        layout = detect_images_lp(cv_image)
        photo_blocks = lp.Layout([b for b in layout if b.type=='Photograph'])

        #return (cv_image, layout)
        #print(type(detected[1]))
        for block in layout:
            log.debug(block.type)
        cv_image = draw_box(cv_image, photo_blocks, box_width=3, show_element_type=True)


        print(out_file)
        try:
            if isinstance(cv_image,np.ndarray):
                cv2.imwrite(out_file, cv_image)
            else:
                cv_image.save(out_file)

            log.debug(f"Image saved successfully to: {out_file}")
        except Exception as e:
            log.debug(f"Error saving image: {e}")

if __name__ == "__main__":
    main()
