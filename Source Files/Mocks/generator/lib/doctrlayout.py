from .layout import Layout
#from doctr.io import DocumentFile
#from doctr.models import ocr_predictor
from doctr.models import detection_predictor, page_orientation_predictor
#from doctr.models._utils import estimate_orientation
#from doctr.doctr.models._utils import estimate_orientation
import numpy as np

class DocTRLayout(Layout):
    def __init__(self, image, name=""):
        super().__init__(image, name)
        self.orientation = 0

    def check_orientation(self):
        from doctr.models import detection_predictor, page_orientation_predictor
        page_orient_predictor = page_orientation_predictor(pretrained=True)
        np_image = np.asarray(self.image) 
        docs = [np_image]
        result = page_orient_predictor(docs)
        return result[1][0]
