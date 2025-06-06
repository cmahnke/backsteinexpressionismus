from .layout import Layout, Block
import pytesseract

class TesseractLayout(Layout):
    def __init__(self, image, name=""):
        super().__init__(image, name)
        self.orientation = 0

    def detect(self):
        boxes = pytesseract.image_to_boxes(self.image, config='--psm 5')
        for box in boxes.splitlines():
            fields = box.split(' ')
            self.detected_blocks.append(TesseractBlock())

    def check_orientation(self):
        try:
            results = pytesseract.image_to_osd(self.image, config="--psm 0 -c min_characters_to_try=5", output_type=pytesseract.Output.DICT)
            self.orientation = results["orientation"]
        except pytesseract.TesseractError as te:
            print(repr(te))


class TesseractBlock(Block):
    def __init__(self, x:int, y:int, w:int, h:int, type:str=None, content=""):
        super().__init__(x, y, w, h, type=None)

    def dict(self):
        return {"x": self.x, "y": self.y, "w": self.w, "h": self.h, "type": self.type, "content": self.content }