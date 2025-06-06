from ultralytics import YOLO
from .classifier import Classifier
import os
from termcolor import cprint

lib_dir = os.path.dirname(os.path.realpath(__file__))
# TODO: Add Model Management
model_path = "../models/yolo11x-cls.pt"
model_path = os.path.join(lib_dir, model_path)


SCORES = {}
SCORES['INTERIOR'] = {"score": 1, "additional_classes": ["interior"]}
SCORES['INTERIOR']["classes"] = ["saltshaker", "shower_curtain","switch", "sliding_door", "shoji","wardrobe", "bookshop", "throne", "altar", "desk", "library", "restaurant", "cinema", "bakery", "barbershop", "dining_table", 'wall_clock', 'pool_table', 'barbershop', 'grand_piano', 'bookcase', 'desk', 'file', 'vault', 'barber_chair', "folding_chair", "organ", "stage", "academic_gown", "bucket", "ashcan", "cup", "pedestal", "window_shade", "crate", "theater_curtain", "letter_opener", "library"]
SCORES['EXTERIOR'] = {"score": 2, "additional_classes": ["exterior"]}
SCORES['EXTERIOR']["classes"] = ["radio_telescope", "tobacco_shop", "boathouse", "bell_cote",  "tile_roof", "seashore", "greenhouse", "obelisk"]

SCORES['BUILDINGS'] = {"score": 3, "additional_classes": ["building"]}
SCORES['BUILDINGS']["classes"] = ["lumbermill", "monastery", "triumphal_arch","castle", "palace","church", "dome", "mosque","water_tower", "prison", "barn", "planetarium"]

TRAFFIC=["streetcar", "school_bus", "minibus", "traffic_light", "passenger_car", "pier", "dock", "freight_car", "street_sign", "cab"]

SCORES['SURROUNDINGS'] = {"score": 2, "additional_classes": ["surroundings"]}
SCORES['SURROUNDINGS']["classes"] = ["hay", "flagpole", "chainlink_fence", "fountain", "park_bench","stone_wall","cliff", "breakwater", "lakeside", "picket_fence", "mailbox", "turnstile", *TRAFFIC]

SCORES['BOGUS'] = {"score": -1, "additional_classes": ["bogus"]}
ANIMALS = ["ox", "triceratops", "cocker_spaniel", "Great_Dane", "basset", "Afghan_hound", "bloodhound","wire-haired_fox_terrier", "Weimaraner", "horned_viper", "sea_snake", "nematode"]
BRIDGES = ["viaduct","wing","suspension_bridge","steel_arch_bridge", "dam"]

DEVICES= ["dial_telephone", "cassette_player", "tape_player", "typewriter_keyboard", "radio", "computer_keyboard", "dial_telephone", "digital_clock", "pay-phone", "hand-held_computer", "remote_control"]

SCORES['BOGUS']["classes"] = ["unicycle", "projectile", "missile", "half_track", "tank", "cannon", "warplane" , "electric_guitar", "abacus", "waffle_iron", "measuring_cup", "waffle_iron" , "vending_machine", "menu" , "submarine", "oscilloscope", "hammer", "maze", "rifle", "cleaver", "shower_cap", "toaster", "wig", "cowboy_hat", "wreck", "scoreboard", "fire_screen", "sewing_machine", "handkerchief", "aircraft_carrier","submarine","airship", *ANIMALS, *BRIDGES, *DEVICES]

SCORES['REJECT'] = {"score": -5, "additional_classes": ["reject"]}
LOGOS=["knot", "coil", "hook","analog_clock", "puck", "buckle", "shield", "tennis_ball", "bottlecap"]
FRONT_PAGE=["comic_book", "whistle", "pick", "jigsaw_puzzle", "binder", "carton", "doormat", "book_jacket", "bath_towel", "window_screen", "apron"]
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
            for i, cls in enumerate(result.probs.top5):
                self.classification[names[cls]] = float(result.probs.top5conf[i])

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
