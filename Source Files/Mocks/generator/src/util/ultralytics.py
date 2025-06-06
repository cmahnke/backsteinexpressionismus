# See https://dev.to/ppaanngggg/how-to-analyze-document-layout-by-yolo-3jd
from ultralytics.utils.plotting import Annotator, Colors
from ultralytics import YOLO

model= ""

def detect(cv_img):
    model = YOLO(model)
    result = model.predict(cv_img)[0]
    return result

def annotate(img, result):
    colors = Colors()
    annotator = Annotator(img, line_width=line_width, font_size=font_size)
    for label, box in zip(result.boxes.cls.tolist(), result.boxes.xyxyn.tolist()):
        label = int(label)
        annotator.box_label(
            [box[0] * width, box[1] * height, box[2] * width, box[3] * height],
            result.names[label],
            color=colors(label, bgr=True),
        )
    annotator.save(
        os.path.join(os.path.dirname(image), "annotated-" + os.path.basename(your_image_path))
    )