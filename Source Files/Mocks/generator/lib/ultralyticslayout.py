from ultralytics import YOLO
from .layout import Layout, Block
import os
from .util import white_balance, white_balance_hist, add_frame

lib_dir = os.path.dirname(os.path.realpath(__file__))
# See https://huggingface.co/hantian/yolo-doclaynet/tree/main
# TODO: Add Model Management
model_path = "../models/yolov11m-doclaynet.pt"
model_path = os.path.join(lib_dir, model_path)

class UltralyticsLayout(Layout):
    model = YOLO(model_path)

    def __init__(self, image, name="", border=0):
        super().__init__(image, name, border=border)
        self.image = white_balance_hist(self.image)
        if self.border > 0:
            self.image = add_frame(self.image, border_width=self.border, border_color="white")
        
    def detect(self, model=None):
        if model is None:
            model = UltralyticsLayout.model
        self.results = model(self.image, verbose=False)      
        for result in self.results:
            names = result.names
            for box in result.boxes:
                t = names[int(box.cls)]
                coords = box.xyxy.numpy().flatten().astype(int)
                b = Block(coords[0], coords[1], coords[2], coords[3], t)
                self.detected_blocks.append(b)

    def debug(self):
        #print(self.results[0].to_json())
        return self.results[0].plot()