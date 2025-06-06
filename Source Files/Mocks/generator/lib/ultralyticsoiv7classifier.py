# Check: https://github.com/ultralytics/yolov5/issues/12054
from ultralytics import YOLO
from .classifier import Classifier
import os
from termcolor import cprint

lib_dir = os.path.dirname(os.path.realpath(__file__))
# TODO: Add Model Management
model_path = "../models/yolov8x-oiv7.pt"
model_path = os.path.join(lib_dir, model_path)


SCORES = {}
SCORES['INTERIOR'] = {"score": 1, "additional_classes": ["interior"]}
SCORES['INTERIOR']["classes"] = ["Chair", "Table", "Stairs"]
SCORES['EXTERIOR'] = {"score": 2, "additional_classes": ["exterior"]}
SCORES['EXTERIOR']["classes"] = ["Building", "House", "Tower", "Skyscraper"]

SCORES['BUILDINGS'] = {"score": 3, "additional_classes": ["building"]}
SCORES['BUILDINGS']["classes"] = ["lumbermill", "monastery", "triumphal_arch","castle", "palace","church", "dome", "mosque","water_tower", "prison", "barn", "planetarium"]

TRAFFIC=["Boat", "Car"]

SCORES['SURROUNDINGS'] = {"score": 1, "additional_classes": ["surroundings"]}
SCORES['SURROUNDINGS']["classes"] = ["Tree", *TRAFFIC]

SCORES['BOGUS'] = {"score": -1, "additional_classes": ["bogus"]}
ANIMALS = ["Lion", "Animal"]
BRIDGES = []

DEVICES= []

SCORES['BOGUS']["classes"] = ["Sculpture", *ANIMALS, *BRIDGES, *DEVICES]

SCORES['REJECT'] = {"score": -5, "additional_classes": ["reject"]}
LOGOS=["Coin"]
FRONT_PAGE=["Book"]
DRAWING = ['envelope', 'slide_rule', 'rule', 'web_site', 'crossword_puzzle']
SCORES['REJECT']["classes"] = [*LOGOS, *FRONT_PAGE, *DRAWING]

class UltralyticsClassifier(Classifier):
    model = YOLO(model_path)

    def __init__(self, image):
        super().__init__(image)

    def classify(self, model=None):
        if len(self.classification) > 0:
            return
        if model is None:
            model = UltralyticsClassifier.model
        self.results = model(self.image, verbose=False)
        
        for result in self.results:
            names = result.names
            for box in result.boxes:
                t = names[int(box.cls)]
                self.classification[t] = float(box.conf[0])
            #t = names[int(result.probs.top1)]
            #for i, cls in enumerate(result.probs.top5):
            #    self.classification[names[cls]] = float(result.probs.top5conf[i])

    def calculate_score(classification):
        class_score = {}
        class_score['_total'] = 0
        class_score['_additional_classes'] = []
        for key in SCORES:
            score = SCORES[key]["score"]
            additional_classes = SCORES[key]["additional_classes"]
            for cls in classification:
                if cls in SCORES[key]["classes"]:
                    weighted_score = score * classification[cls]
                    class_score[cls] = weighted_score
                    class_score['_total'] += weighted_score
                    class_score['_additional_classes'].extend(additional_classes)
        class_score['_additional_classes'] = list(set(class_score['_additional_classes']))
        return class_score

    def score(self):
        def check_missing_classes(classification):
            all_classes = []
            for key in SCORES:
                all_classes.extend(SCORES[key]["classes"])
            for key in classification:
                if not key in all_classes:
                    cprint(f"!Class {key} isn't configured", "red")

        if not self.classification:
            raise ValueError("No classifications, run classify() first")
        
        check_missing_classes(self.classification)
        return UltralyticsClassifier.calculate_score(self.classification)["_total"]
