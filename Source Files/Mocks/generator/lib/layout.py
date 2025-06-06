import json
from termcolor import cprint
from .util import *
from PIL import Image

def doc_tr_orientation(pil_image):
    dl = DocTRLayout(pil_image)
    return dl.check_orientation()


class Layout:

    def __init__(self, image, name="", border=None):
        self.detected_blocks = []
        self.orientation = 0
        self.name = name
        self.sub_image_meta = {}
        
        if isinstance(image, Layout):
            self.image = image.orig_image
            self.orig_image = image.orig_image
            self.name = image.name
            self.border = image.border
            self.orientation = image.orientation
            self.detected_blocks = image.detected_blocks
        else:
            self.image = image
            self.orig_image = image
            self.border = border
            self.orientation = detect_orientation_doctr(image)
        if border is not None:
            self.border = border

    def check_orientation(self):
        self.orientation = detect_orientation_doctr(self.image)

    def detect(self):
        raise NotImplementedError()

    def extract(self, i:int, auto_rotate=True, check_halftone_grid=False):
        orig = self.orig_image
        #if self.orientation != 0 and auto_rotate:
        #    cprint(self.detected_blocks[i].dict(),"green")
        #    b = rotate_bbox(self.detected_blocks[i].dict(), self.orientation)
        #    cprint(f"Rotating to {self.orientation}, transforming from {self.detected_blocks[i].dict()} to {b}", "yellow")
        #    orig = orig.rotate(self.orientation*-1, expand=True, resample=Image.Resampling.LANCZOS)
        #    #raise NotImplementedError(f"Handling rotation of {self.orientation} not implemented")
        #else:
        #    
        
        b = self.detected_blocks[i].dict()
        if self.border is None:
            self.border = 0
        coords = (b["x1"] - self.border, b["y1"] - self.border, b["x2"] - self.border, b["y2"] - self.border)
        sub_image = orig.crop(coords)
        if check_halftone_grid == True:
            g = pil_to_opencv_gray(sub_image)
            if check_print(g)[0]:
                cv_image = smoothen_ht(pil_to_opencv(sub_image))
                sub_image = opencv_to_pil(cv_image)

        if auto_rotate:
            rot = int(detect_orientation_davidmerrick(sub_image))
            if self.orientation != 0 and rot != 0:
                cprint(f"ocr orientation is {self.orientation}, image rotation is {rot}", "yellow")
            elif self.orientation != rot:
                cprint(f"ocr orientation is {self.orientation}, image rotation is {rot}", "red")
            else:
                cprint(f"ocr orientation is {self.orientation}, image rotation is {rot}", "green")
            self.sub_image_meta[i] = {"rotation": rot}

            if rot != 0:
                sub_image = sub_image.rotate(rot, expand = True) #resample=Image.Resampling.LANCZOS)[0]
        return sub_image
    
    def json(self):
        return json.dumps(list(map(lambda x: x.dict(), self.blocks)))
    
    def filter(self, type):
        self.detected_blocks = list(filter(lambda b: b.type == type, self.detected_blocks))

    def blocks(self):
        return self.detected_blocks

class Block:
    def __init__(self, x1:int, y1:int, x2:int, y2:int, type:str=None):
        self.x1 = x1
        self.y1 = y1
        self.x2 = x2
        self.y2 = y2
        self.type = type

    def dict(self):
        # TODO This will fail with Numpy based backend
        return {"x1": int(self.x1), "y1": int(self.y1), "x2": int(self.x2), "y2": int(self.y2), "type": self.type }
    
    #def __repr__(self):
    #    return rept(self.dict())