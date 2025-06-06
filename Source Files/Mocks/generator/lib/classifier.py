from collections import OrderedDict

class Classifier:
    def __init__(self, image):
        self.image = image
        self.classification = OrderedDict()

    def classify(self):
        raise NotImplementedError()

    def classes(self):
        return self.classification
    
    def score(self):
        raise NotImplementedError()