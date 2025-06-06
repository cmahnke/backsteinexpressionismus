import glob
import os
import json
import logging
import re
import sys
import logging
from pathlib import Path
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
from termcolor import cprint
#from src.util.layoutparser import detect_images_lp
#from lib.tesseractlayout import TesseractLayout
##from lib.doctrlayout import DocTRLayout
#from lib.ultralyticslayout import UltralyticsLayout
#from lib.ultralyticsoiv7classifier import UltralyticsClassifier
#from lib.ultralyticsextractor import UltralyticsExtractor
##from lib.orientationlayout import OrientationLayout
import yaml


from lib import UltralyticsLayout, UltralyticsExtractor, UltralyticsClassifier, TesseractLayout, detect_orientation_doctr

wb = True
debug = True

logger_name = __name__
logger = logging.getLogger("create_training_data")
default_config_file = "./conf/config.yaml"
#torch.serialization.add_safe_globals([Embedder])

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

def preprocess(image_path, output, size=(1024, 1024)):
    try:
        img = Image.open(image_path).convert("RGB")
        # Resize with aspect ratio preserved, then pad or crop to target_size
        # This is a simple approach. For more advanced, consider 'thumbnail' or custom logic.
        img.thumbnail(size, Image.Resampling.LANCZOS)
        # Create a new blank image and paste the resized image to center it
        new_img = Image.new("RGB", target_size, (0, 0, 0)) # Black background
        paste_x = (target_size[0] - img.width) // 2
        paste_y = (target_size[1] - img.height) // 2
        new_img.paste(img, (paste_x, paste_y))

        new_img.save(output)
        log.debug(f"Processed: {image_path} -> {output}")
    except Exception as e:
        log.debug(f"Error processing {input_path}: {e}")


def find_files(directory, suffixes):
    files = []
    for ext in suffixes:
        files.extend(glob.glob(f"{directory}/**/*.{ext}", recursive=True))
    return files

def load_pil(in_file):
    return Image.open(in_file)

def main():
    config = load_config()

    suffixes = config["extraction"]["suffixes"]
    base_dir = config["extraction"]["input"]
    out_dir = config["extraction"]["output"]

    if debug:
        log_level = logging.DEBUG
    else:
        log_level = logging.INFO

    logging.basicConfig(level=log_level)
    if not os.path.exists(out_dir):
        os.makedirs(out_dir)
    images = find_files(base_dir, suffixes)
    logger.info("Collecting files")
    #prefix =
    for image_file in images:
        suffix = "jpg" #path.suffix
        path = Path(image_file)
        prefix_key = path.parent.name.split("-")
        prefix = "".join(map(lambda p: p[:2], prefix_key)) + "".join(re.findall(r'\d+', path.parent.name))

        out_file = os.path.join(out_dir, f"{prefix}-{path.stem}.{suffix}")
        out_meta = os.path.join(out_dir, f"{prefix}-{path.stem}.json")

        logger.info(f'Checking {image_file} for images')

        pil_image = load_pil(image_file)
        #cprint(detect_orientation_doctr(pil_image), "blue")

        #tl = TesseractLayout(pil_image, name=f"{image_file} -> {prefix}")
        #tl = DocTRLayout(pil_image)

        ul = UltralyticsLayout(pil_image, border=40)
        ul.check_orientation()
        #cprint(f"detected {tl.orientation}", 'green')
        logger.info(f"Detected orientation for {image_file} is {ul.orientation}")
        meta = {"input_file": image_file, "orientation": ul.orientation}
        ul.detect()
        ul.filter("Picture")

        if len(ul.blocks()) == 0:
            logger.info(f"Skipping {image_file}")
            continue

        if debug:
            cv_image = ul.debug()
            cv2.imwrite(out_file, cv_image)

        result_metas = []
        for i, block in enumerate(ul.blocks()):

            status = "accepted"
            block_image = ul.extract(i)
            uc = UltralyticsClassifier(block_image)
            uc.classify()
            out_file = os.path.join(out_dir, f"{prefix}-{path.stem}-{i}.{suffix}")
            try:
                score = uc.score()
            except ValueError as e:
                logger.info(repr(e))
                status = "rejected"
            if score < .4:
                logger.info(f'Skipping image {image_file} with detected classes {", ".join(uc.classification.keys())}')
                if debug:
                    status = "rejected"
                    out_file = os.path.join(out_dir, f"{prefix}-{path.stem}-{i}-{status}.{suffix}")
                else:
                    continue
            logger.info(f'Processing image with detected classes {", ".join(uc.classification.keys())}')
            result_meta = {"out": out_file, "classification": uc.classification, "score":UltralyticsClassifier.calculate_score(uc.classification), "status": status}
            if i in ul.sub_image_meta:
                result_meta["rotation"] = ul.sub_image_meta[i]
            logger.debug("Classification: %s", uc.classification)
            logger.debug("Scores: %s", UltralyticsClassifier.calculate_score(uc.classification))

            logger.info(f"Extracting detected image block into {out_file}")

            block_image.save(out_file)
            if status == "accepted":
                segments = []
                ue = UltralyticsExtractor(block_image)
                ue.annotate(logger)
                #cprint(f"=> {json.dumps(ue.blocks(),default=lambda x: x.__dict__)}", "white")
                if debug:
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


        meta["outputs"] = result_metas
        with open(out_meta, 'w', encoding='utf-8') as f:
            json.dump(meta, f, ensure_ascii=False, indent=4)


        continue



        cv_image = pil_to_opencv(pil_image)

        layout = detect_images_lp(cv_image)

        photo_blocks = lp.Layout([b for b in layout if b.type=='Photograph'])



        #return (cv_image, layout)
        #print(type(detected[1]))
        for block in layout:
            print(block.type)
        cv_image = draw_box(cv_image, photo_blocks, box_width=3, show_element_type=True)


        print(out_file)
        try:
            if isinstance(cv_image,np.ndarray):
                cv2.imwrite(out_file, cv_image)
            else:
                cv_image.save(out_file)

            print(f"Image saved successfully to: {out_file}")
        except Exception as e:
            print(f"Error saving image: {e}")

if __name__ == "__main__":
    main()
