import os
from .layout import Layout
import numpy as np

from transformers import ViTFeatureExtractor, ViTModel, ViTImageProcessor, ViTForImageClassification
from transformers import TFAutoModel

#from tensorflow.keras.models import Model
#from tensorflow.keras import layers
from keras.models import Model
from keras import layers
import tensorflow as tf

#os.environ["KERAS_BACKEND"] = "tensorflow"

base_model = 'google/vit-base-patch16-224'
feature_extractor = ViTFeatureExtractor.from_pretrained(base_model)
processor = ViTImageProcessor.from_pretrained(base_model)


#model = ViTForImageClassification.from_pretrained(base_model)

lib_dir = os.path.dirname(os.path.realpath(__file__))
model_path = "../models/model-vit-ang-loss.h5"
model_path = os.path.join(lib_dir, model_path)
model = TFAutoModel.from_pretrained(model_path)
IMAGE_SIZE = 224

class OrientationLayout(Layout):
    #tf.compat.v1.disable_eager_execution()
    vit_base = TFAutoModel.from_pretrained("google/vit-base-patch16-224")
    #vit_base =  ViTForImageClassification.from_pretrained("google/vit-base-patch16-224")

    #img_input = layers.Input(shape=(3,IMAGE_SIZE, IMAGE_SIZE))
    #img_input = layers.Input(shape=(3,IMAGE_SIZE, IMAGE_SIZE))
    #x = vit_base(img_input)
    #img = np.zeros([IMAGE_SIZE,IMAGE_SIZE,3],dtype=np.uint8)
    #inputs = processor(images=img, return_tensors="pt")
    #model = model(**inputs)
    #model.load_weights(model_path)

    def __init__(self, image, name=""):
        super().__init__(image, name)
        self.orientation = 0

    def check_orientation(self):
        image_size = IMAGE_SIZE


        self.image = self.image.resize((image_size, image_size))
        np_image = np.asarray(self.image)
        if(len(np_image.shape) < 3):
            np_image = np.repeat(np_image[..., np.newaxis], 3, -1)
        #TODO: xcheck if image is grayscale
        #rgb_batch = np.repeat(grayscale_batch[..., np.newaxis], 3, -1)
        #image = cv2.merge((image, image, image))
        features = feature_extractor(images=[np_image], return_tensors="pt")["pixel_values"]
        features = np.array(features)
        angle = OrientationLayout.model.predict(features)[0][0]
        self.orientation = angle
