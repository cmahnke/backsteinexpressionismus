import os
from PIL import Image
from ultralytics import YOLO
from .ultralyticslayout import UltralyticsLayout
from .ultralyticsoiv7classifier import SCORES
from .extractor import Extractor
from .layout import Block
from termcolor import cprint

# TODO: Annotate
# TODO: Resize
# TODO: get rid of halftone grid

lib_dir = os.path.dirname(os.path.realpath(__file__))
# TODO: Add Model Management
model_path = "../models/yolov8x-oiv7.pt"
model_path = os.path.join(lib_dir, model_path)


class UltralyticsExtractor(Extractor, UltralyticsLayout):
    model = YOLO(model_path)
    #print(repr(model))

    def __init__(self, image, max_px=640, additional_classes=[]):
        self.orig_image = image
        self.additional_classes = additional_classes
        
        #self.image = image.thumbnail((max_px,max_px), Image.Resampling.LANCZOS)
        #self.image = UltralyticsExtractor.preprocess_scale(image, max_px)
        self.image = image
        #self.image.show()
        self.detected_blocks = []
        #super().__init__(image, name, border)

    def preprocess_scale(image, max_px):
        width, height = image.size
        if width > max_px or height > max_px:
            image = image.copy()
            image.thumbnail((max_px,max_px), Image.Resampling.LANCZOS)
        return image

    def annotate(self, logger=None):
        self.detect(model=UltralyticsExtractor.model)
        self.detected_blocks = []
        for result in self.results:
            names = result.names
            for box in result.boxes:
                t = names[int(box.cls)]
                if t in SCORES['EXTERIOR']["classes"]:
                    coords = box.xyxy.numpy().flatten().astype(int)
                    b = Block(coords[0], coords[1], coords[2], coords[3], t)
                    self.detected_blocks.append(b)
                    if logger is not None:
                        logger.info(f"Extracting detected object {t} at {coords}")
                    cprint(f"{t}: {coords}", "white")
        map(lambda x: cprint(x.__dict__, 'white'), self.detected_blocks)
        #for result in self.results:
        #    print(result)

    def scale(self):
        raise NotImplementedError()