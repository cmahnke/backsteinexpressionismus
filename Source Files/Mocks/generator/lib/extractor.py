from .layout import Layout

class Extractor:

    def __init__(self, image, name="", border=None):
        self.detected_blocks = []
        self.orientation = 0
        self.name = name
        
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
        if border is not None:
            self.border = border
    
    def annotate(self, logger=None):
        raise NotImplementedError()

    def scale(self):
        raise NotImplementedError()

    def extract(self, i:int, auto_rotate=True, check_halftone_grid=False):
        orig = self.orig_image 
        
        b = self.detected_blocks[i].dict()
        coords = (b["x1"] , b["y1"] , b["x2"], b["y2"])
        sub_image = orig.crop(coords)
        return sub_image

    def blocks(self):
        return self.detected_blocks
    
    #def __repr__(self):
    #    blocks = map(lambda x: repr(x), self.detected_blocks)
    #    return str(blocks)