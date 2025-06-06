from ..layoutparser.models.detectron2.layoutmodel import MyDetectron2LayoutModel
from ..layoutparser.visualization import draw_box

def detect_images_lp(cv_image):
    # TODO: Add https://www.freedomvc.com/index.php/2022/01/17/basic-background-remover-with-opencv/
    config_path = 'lp://NewspaperNavigator/faster_rcnn_R_50_FPN_3x/config'
    #config_path = 'lp://PubLayNet/mask_rcnn_X_101_32x8d_FPN_3x/config'
    model = MyDetectron2LayoutModel(
        config_path,
        #label_map = {0: "Photograph", 1: "Illustration", 2: "Map", 3: "Comics/Cartoon", 4: "Editorial Cartoon", 5: "Headline", 6: "Advertisement"}
    )
    layout = model.detect(cv_image)
    return layout