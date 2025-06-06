import os
import math
from PIL import Image, ImageOps, ImageEnhance
import numpy as np
from termcolor import cprint
import cv2
#from transformers import *
#import transformers
#transformers.logging.set_verbosity_warning()

def pil_to_opencv(pil_image):
    np_image = np.array(pil_image)
    opencv_image = cv2.cvtColor(np_image, cv2.COLOR_RGB2BGR)
    return opencv_image

def pil_to_opencv_gray(pil_image):
    cv_image = pil_to_opencv(pil_image)
    return cv2.cvtColor(cv_image, cv2.COLOR_BGR2GRAY)

def opencv_to_pil(cv_image):
    rgb_image = cv2.cvtColor(cv_image, cv2.COLOR_BGR2RGB)
    return Image.fromarray(rgb_image)

def white_balance(im):
    return white_balance_with_whitepoint(im)

def white_balance_with_whitepoint(im, coords = None, file = None, opts = None):
    import numpy

    def get_patch (im):
        h, w = im.size
        (nw, nx) = (w / 3, w / 3)
        (nh, ny) = (h / 30, h / 30)
        return im.crop((nx, ny, nx + nw, ny + nh))

    mode = "mean"
    def single(im, opts):
        if im.mode == "RGBA":
            im = im.convert('RGB')
        image = numpy.asarray(im)
        image_patch = numpy.asarray(get_patch(im))
        if mode == 'mean':
            image_gt = ((image * (image_patch.mean() / image.mean(axis=(0, 1)))).clip(0, 255).astype(int))
        elif mode == 'max':
            image_gt = ((image * 1.0 / image_patch.max(axis=(0,1))).clip(0, 1))
        else:
            cprint("Mode not set! Failing!", 'red')

        return Image.fromarray(image_gt.astype('uint8'))

    if isinstance(im, tuple):
        retIm = (single(im[0], opts), single(im[1]. opts))
    else:
        retIm = single(im, opts)

    #debug_processor(im, file)
    return retIm

def white_balance_hist(img, threshold=0.95):
    gray_img = img.convert('L')
    hist = gray_img.histogram()
    max_pixel = len(hist) - 1

    cum_hist = [sum(hist[:i+1]) for i in range(max_pixel + 1)]

    for i in range(max_pixel, 0, -1):
        if cum_hist[i] >= threshold * cum_hist[max_pixel]:
            white_point = i
            break

    #contrast_enhancer = ImageEnhance.Contrast(gray_img)
    #adjusted_img = contrast_enhancer.enhance(1.2)

    table = [0] * 256
    for i in range(256):
        if i < white_point:
            table[i] = int(i * (255 / white_point))
        else:
            table[i] = 255
    #table = [int(i * (255 / white_point)) if i < white_point else 255 for i in range(256)]


    balanced_img = gray_img.point(table)

    return balanced_img

def add_frame(pil_image, border_width, border_color):
    framed_image = ImageOps.expand(pil_image, border=border_width, fill=border_color)
    return framed_image

def rotate_bbox(bbox, angle, center=None):
    if isinstance(bbox, dict):
        x1 = bbox["x1"]
        y1 = bbox["y1"]
        x2 = bbox["x2"]
        y2 = bbox["y2"]
    else:
        x1, y1, x2, y2 = bbox

    if center is None:
        center = ((x1 + x2) / 2, (y1 + y2) / 2)

    angle = np.deg2rad(angle)

    rotation_matrix = np.array([[np.cos(angle), -np.sin(angle)],
                                [np.sin(angle), np.cos(angle)]])

    coords = np.array([[x1, y1],
                        [x2, y1],
                        [x2, y2],
                        [x1, y2]], dtype=np.float64)

    coords -= center

    rotated_coords = np.dot(coords, rotation_matrix)

    rotated_coords += center

    x_min = np.min(rotated_coords[:, 0])
    x_max = np.max(rotated_coords[:, 0])
    y_min = np.min(rotated_coords[:, 1])
    y_max = np.max(rotated_coords[:, 1])

    return {"x1":int(x_min), "y1":int(y_min), "x2":int(x_max), "y2": int(y_max)}


def detect_orientation_pil(pil_image):

    try:
        # Get image dimensions
        width, height = pil_image.size

        # Calculate the center of the image
        center_x, center_y = width // 2, height // 2

        # Define potential rotation angles (in degrees)
        angles_to_check = [0, 90, 180, 270]

        # Calculate the image moments (for basic shape analysis)
        img_array = np.array(pil_image.convert('L'))  # Convert to grayscale
        moments = cv2.moments(img_array)
        hu_moments = cv2.HuMoments(moments)

        # Initialize variables to store best score and angle
        best_score = 0
        best_angle = 0

        # Rotate and compare moments
        for angle in angles_to_check:
            rotated_img = pil_image.rotate(angle)
            rotated_array = np.array(rotated_img.convert('L'))
            rotated_moments = cv2.moments(rotated_array)
            rotated_hu_moments = cv2.HuMoments(rotated_moments)

            # Calculate the difference between Hu moments (simple similarity measure)
            diff = np.sum(np.abs(hu_moments - rotated_hu_moments))

            # Update best score and angle if necessary
            if diff < best_score or best_score == 0:
                best_score = diff
                best_angle = angle

        return best_angle

    except Exception as e:
        print(f"Error processing image: {e}")
        return None


def detect_orientation_cv(cv_image_gray):
    edges = cv2.Canny(cv_image_gray, 50, 150)

    # Find lines using HoughLinesP
    lines = cv2.HoughLinesP(edges, 1, np.pi/180, 50, minLineLength=100, maxLineGap=10)

    # Calculate line slopes
    slopes = []
    if lines is not None:
        for line in lines:
            x1, y1, x2, y2 = line[0]
            if x2 - x1 == 0:
                continue  # Avoid division by zero
            slope = (y2 - y1) / (x2 - x1)
            slopes.append(slope)

    # Estimate rotation angle based on line slopes
    if slopes:
        avg_slope = np.mean(slopes)
        angle = np.degrees(np.arctan(avg_slope))
        return angle
    else:
        return None  # No lines detected

def pil_to_rgb(pil_image):
    if isinstance(pil_image, Image.Image):
        if pil_image.mode != 'RGB':
            pil_image = pil_image.mode('RGB')
        return pil_image
    else:
        raise ValueError("Not a PIL image")

def opencv_to_rgb(cv_image):
    if isinstance(cv_image, np.ndarray):
        if(len(cv_image.shape) < 3):
            cv_image = np.repeat(cv_image[..., np.newaxis], 3, -1)
        return cv_image
    else:
        raise ValueError("Not a OpenCV image")

# Function to predict orientation
def detect_orientation_davidmerrick(pil_image):
    from transformers import ViTForImageClassification, ViTImageProcessor
    base_model = 'google/vit-base-patch16-224'
    default_model = 'davidmerrick/rotated2'
    image_processor = ViTImageProcessor.from_pretrained(base_model)
    model = ViTForImageClassification.from_pretrained(default_model)

    pil_image = pil_to_rgb(pil_image)
    pixel_values = image_processor(pil_image, return_tensors="pt")["pixel_values"]
    output = model(pixel_values)
    result =  model.config.id2label[int(output.logits.softmax(dim=1).argmax())]
    #print(repr(output), repr(model.config))

    return result


# THis won't work
def detect_orientation_cmarkea(pil_image):
    from transformers import AutoImageProcessor, BeitForSemanticSegmentation

    image_processor = AutoImageProcessor.from_pretrained("cmarkea/dit-base-layout-detection")
    model = BeitForSemanticSegmentation.from_pretrained("cmarkea/dit-base-layout-detection")


    pil_image = pil_to_rgb(pil_image)
    pixel_values = image_processor(pil_image, return_tensors="pt")["pixel_values"]
    # perform inference
    output = model(pixel_values)
    print(model.config)
    # get the label id and return the class name
    result =  model.config.id2label[int(output.logits.softmax(dim=1).argmax())]
    print(f"cmarkea/dit-base-layout-detection: {repr(output)}")

    return result


def detect_orientation_doctr(pil_image):
    from doctr.models import detection_predictor, page_orientation_predictor
    page_orient_predictor = page_orientation_predictor(pretrained=True)
    np_image = np.asarray(pil_image)
    np_image = opencv_to_rgb(np_image)
    docs = [np_image]
    result = page_orient_predictor(docs)
    return result[1][0]


def detect_orientation_doctr2(pil_image):
    from doctr.models import detection_predictor, page_orientation_predictor
    from doctr.models._utils import estimate_orientation
    np_image = np.asarray(pil_image)
    #return estimate_orientation(np_image)
    det_predictor = detection_predictor(
        arch="fast_base",
        pretrained=True,
        assume_straight_pages=False,
    )
    #det_predictor = detection_predictor('db_resnet50', pretrained=True, assume_straight_pages=False, preserve_aspect_ratio=True)

    page_orient_predictor = page_orientation_predictor(pretrained=True)
    det_predictor.model.postprocessor.bin_thresh = 0.3
    det_predictor.model.postprocessor.box_thresh = 0.65

    docs = [np_image]
    loc_preds, out_maps = det_predictor(docs, return_maps=True)
    print(out_maps)
    seg_maps = [
        np.where(out_map > getattr(det_predictor.model.postprocessor, "bin_thresh"), 255, 0).astype(np.uint8)
        for out_map in out_maps
    ]
    #print(seg_maps)
    _, classes, probs = zip(page_orient_predictor(docs))
    self.orientation = classes[0][0]

    #print(estimate_orientation(np_image))

    #print("=>")
    # Flatten to list of tuples with (value, confidence)
    page_orientations = [
        (orientation, prob)
        for page_classes, page_probs in zip(classes, probs)
        for orientation, prob in zip(page_classes, page_probs)
    ]

    cprint(f"DocTR {page_orientations}", "green")



def predict_orientation(pil_image):
    #os.environ["KERAS_BACKEND"] = "tensorflow"

    base_model = 'google/vit-base-patch16-224'
    from transformers import AutoImageProcessor, TFAutoModel, ViTForImageClassification, ViTImageProcessor
    lib_dir = os.path.dirname(os.path.realpath(__file__))
    feature_extractor = ViTImageProcessor.from_pretrained(base_model)

    def preprocess(pil_image):
        image_size = 224
        pil_image = pil_image.resize((image_size, image_size))
        img = np.array(pil_image)
        X_vit = [img]
        X_vit = feature_extractor(images=X_vit, return_tensors="pt")["pixel_values"]
        X_vit = np.array(X_vit)
        X = X_vit
        return X

    model_path = "../models/model-vit-ang-loss.h5"
    model_path = os.path.join(lib_dir, model_path)
    #model = ViTForImageClassification.from_pretrained(model_path)
    #model = TFAutoModel.from_pretrained(model_path)

    import tensorflow as tf
    #import keras
    #from tensorflow.keras.models import Model
    from keras.models import Model
    from keras.layers import Input, Dense
    from tensorflow.keras.models import Model
    #from tensorflow.keras import layers as L
    IMAGE_SIZE = 224
    vit_base = TFAutoModel.from_pretrained("google/vit-base-patch16-224")
    img_input = tf.keras.layers.Input(shape=(3,IMAGE_SIZE, IMAGE_SIZE))
    print (f"{type(img_input)}  + {repr(img_input)}")
    #img_input = (3,IMAGE_SIZE, IMAGE_SIZE)
    img_input = tf.lay
    x = vit_base(img_input)

    y = Dense(1, activation="linear")(x[-1])
    model = Model(img_input, y)
    model.load_weights(model_path)

    return model.predict(preprocess(pil_image))[0][0]


def check_print(cv_image):
    edges = cv2.Canny(cv_image, 50, 150, apertureSize=5)
    height, width = cv_image.shape[:2]
    minLength = math.sqrt(math.pow(height / 3, 2) + math.pow(width / 3, 2))
    threshold = width / 3
    lines = cv2.HoughLinesP(edges, 1, np.pi/180, 100, minLineLength=minLength, maxLineGap=10)
    numLines = 0
    if lines is not None:
        numLines = len(lines)
    cprint(f"Checking for print: Image height: {height}, width: {width}, min length of lines {minLength}, lines threshold: {threshold}, lines found: {numLines}", 'yellow')

    if lines is not None and len(lines) > threshold:
        return (True, numLines)
    return (False, numLines)

#https://matzjb.se/2015/08/08/smoothing-a-halftone-photo-using-fft/
# https://github.com/MenghanXia/InverseHalftoning
def smoothen_ht(cv_img, middle=4, radius=6, thresh=92):
    def normalize(h, w):
        x = np.arange(w)
        y = np.arange(h)
        cx = np.abs(x - w//2) ** 0.5
        cy = np.abs(y - h//2) ** 0.5
        energy = cx[None,:] + cy[:,None]
        return energy*energy

    def ellipse(w, h):
        return cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(2*w+1,2*h+1))

    rows, cols = cv_img.shape[:-1]
    coefs = normalize(rows, cols)
    mid = middle*2
    rad = radius
    ew, eh = cols//mid, rows//mid
    pw, ph = (cols-ew*2)//2, (rows-eh*2)//2
    middle = cv2.copyMakeBorder(ellipse(ew, eh), ph, rows-ph-eh*2-1, pw, cols-pw-ew*2-1	, cv2.BORDER_CONSTANT)

    for i in range(3):
        fftimg = cv2.dft(cv_img[:,:,i],flags = cv2.DFT_COMPLEX_OUTPUT|cv2.DFT_SCALE)
        fftimg = np.fft.fftshift(fftimg)
        spectrum = 20*np.log(cv2.magnitude(fftimg[:,:,0],fftimg[:,:,1]) * coefs)

        thresh = np.uint8(cv2.threshold(spectrum, thresh, 255, cv2.THRESH_BINARY)[1])
        thresh = cv2.multiply(thresh, 1-middle)
        thresh = cv2.dilate(thresh, ellipse(rad,rad))
        thresh = cv2.GaussianBlur(thresh, (0,0), rad/3., 0, 0, cv2.BORDER_REPLICATE)
        thresh = 1 - thresh / 255

        img_back = fftimg * np.repeat(thresh[...,None], 2, axis = 2)
        img_back = np.fft.ifftshift(img_back)
        img_back = cv2.idft(img_back)
        cv_img[:,:,i] = cv2.magnitude(img_back[:,:,0],img_back[:,:,1])

    return cv_img

# See https://www.kaggle.com/code/djokester/image-super-resolution-upscaling-with-real-esrgan
def enhance_ai(img, params=None, factor=4, smoothen=False, weights="RealESRGAN_x{factor}plus.pth"):
    start = time.time()
    global model
    from huggingface_hub import hf_hub_download
    def cached_download_stub(config_file_url, cache_dir="", force_filename=""):
        from RealESRGAN.model import HF_MODELS
        import re
        scale = re.sub(r'http.*_x(\d).pth', '\\1', config_file_url)
        repo = HF_MODELS[int(scale)]['repo_id']
        filename = HF_MODELS[int(scale)]['filename']
        if debug:
            cprint(f"Downloading {config_file_url} to {cache_dir} (repo: {repo}, filename: {filename})", "yellow")
        return hf_hub_download(repo, filename, cache_dir=cache_dir, force_filename=force_filename)

    import torch

    from torchvision.transforms.functional import rgb_to_grayscale

    import types, sys
    functional_tensor_mod = types.ModuleType('functional_tensor')
    functional_tensor_mod.rgb_to_grayscale = rgb_to_grayscale

    import huggingface_hub
    huggingface_hub.cached_download = cached_download_stub

    sys.modules.setdefault('torchvision.transforms.functional_tensor', functional_tensor_mod)
    sys.modules.setdefault('huggingface_hub', huggingface_hub)

    from RealESRGAN import RealESRGAN

    if img.mode in ("RGBA", "L"):
        img = img.convert('RGB')

    if torch.cuda.is_available():
        device = torch.device('cuda')
    #elif torch.mps.is_available():
    #    device = torch.device('mps')
    else:
        device = torch.device('cpu')

    if model is None:
        weight_file = weights.format(**{"factor": factor})
        model = RealESRGAN(device, scale=factor)
        model_path = os.path.join(weights_dir, weight_file)
        model.load_weights(os.path.abspath(model_path), download=False)

    with torch.no_grad():
        output_image = model.predict(img)

    if smoothen:
        output_image = output_image.filter(ImageFilter.SMOOTH)
    width, height = output_image.size
    output_image = output_image.resize((int((1/factor)*width), (int((1/factor)*height))), Image.LANCZOS)
    if debug:
        cprint(f"Scaled from {width}x{height} to {output_image.size[0]}x{output_image.size[1]}", "yellow")
    end = time.time()
    if debug:
        cprint(f"Processing took {(end-start) * 10**3}ms", "yellow")
    return output_image

# Taken from never-built/scripts/extract-images.py
def clahe_contrast(bgr_img=None, rgb_img=None):
    def safe_rgb(cv_image):
        if(len(cv_image.shape) < 3):
            return cv2.cvtColor(cv_image, cv2.COLOR_GRAY2RGB)
        else:
            return cv_image

    def safe_bgr(cv_image):
        if(len(cv_image.shape) < 3):
            return cv2.cvtColor(cv_image, cv2.COLOR_GRAY2BGR)
        else:
            return cv_image

    if bgr_img is not None:
        lab = cv2.cvtColor(safe_bgr(np.asarray(bgr_img)), cv2.COLOR_BGR2LAB)
    elif rgb_img is not None:
        lab = cv2.cvtColor(safe_rgb(np.asarray(rgb_img)), cv2.COLOR_RGB2LAB)
    else:
        raise ValueError("No valid input image")

    l_channel, a, b = cv2.split(lab)

    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))
    cl = clahe.apply(l_channel)

    limg = cv2.merge((cl,a,b))

    enhanced_img = cv2.cvtColor(limg, cv2.COLOR_LAB2BGR)

    return Image.fromarray(enhanced_img)

# See https://stackoverflow.com/q/57030125
def auto_brightness(im, params=None, minimum_brightness = 0.66):
    if isinstance(im, Image.Image):
        image = np.asarray(im)
    else:
        image = im
    cols, rows = image.shape
    brightness = np.sum(image) / (255 * cols * rows)
    ratio = brightness / minimum_brightness
    if ratio >= 1:
        print("Image already bright enough")
        return im

    image = cv2.convertScaleAbs(image, alpha = 1 / ratio, beta = 0)
    return Image.fromarray(image)


def white_balance(im, params=None):
    def get_patch (im):
        h, w = im.size
        (nw, nx) = (w / 3, w / 3)
        (nh, ny) = (h / 30, h / 30)
        return im.crop((nx, ny, nx + nw, ny + nh))

    mode = "mean"
    if im.mode == "RGBA":
        im = im.convert('RGB')
    image = np.asarray(im)
    image_patch = np.asarray(get_patch(im))
    if mode == 'mean':
        image_gt = ((image * (image_patch.mean() / image.mean(axis=(0, 1)))).clip(0, 255).astype(int))
    elif mode == 'max':
        image_gt = ((image * 1.0 / image_patch.max(axis=(0,1))).clip(0, 1))
    else:
        cprint("Mode not set! Failing!", 'red')

    return Image.fromarray(image_gt.astype('uint8'))

def normalize(im, params=None):
    cvAr = cv2.cvtColor(np.array(im), cv2.COLOR_RGB2GRAY)
    normalized = cv2.normalize(cvAr, None, beta=0, alpha=255, norm_type=cv2.NORM_MINMAX)
    return Image.fromarray(cv2.cvtColor(normalized, cv2.COLOR_GRAY2RGB))

# See https://www.kaggle.com/code/djokester/image-super-resolution-upscaling-with-real-esrgan
def enhance_ai(img, params=None, factor=4, smoothen=False, weights="RealESRGAN_x{factor}plus.pth"):
    start = time.time()
    global model
    from huggingface_hub import hf_hub_download
    def cached_download_stub(config_file_url, cache_dir="", force_filename=""):
        from RealESRGAN.model import HF_MODELS
        import re
        scale = re.sub(r'http.*_x(\d).pth', '\\1', config_file_url)
        repo = HF_MODELS[int(scale)]['repo_id']
        filename = HF_MODELS[int(scale)]['filename']
        if debug:
            cprint(f"Downloading {config_file_url} to {cache_dir} (repo: {repo}, filename: {filename})", "yellow")
        return hf_hub_download(repo, filename, cache_dir=cache_dir, force_filename=force_filename)

    import torch

    from torchvision.transforms.functional import rgb_to_grayscale

    import types, sys
    functional_tensor_mod = types.ModuleType('functional_tensor')
    functional_tensor_mod.rgb_to_grayscale = rgb_to_grayscale

    import huggingface_hub
    huggingface_hub.cached_download = cached_download_stub

    sys.modules.setdefault('torchvision.transforms.functional_tensor', functional_tensor_mod)
    sys.modules.setdefault('huggingface_hub', huggingface_hub)

    from RealESRGAN import RealESRGAN

    if img.mode in ("RGBA", "L"):
        img = img.convert('RGB')

    if torch.cuda.is_available():
        device = torch.device('cuda')
    #elif torch.mps.is_available():
    #    device = torch.device('mps')
    else:
        device = torch.device('cpu')

    if model is None:
        weight_file = weights.format(**{"factor": factor})
        model = RealESRGAN(device, scale=factor)
        model_path = os.path.join(weights_dir, weight_file)
        model.load_weights(os.path.abspath(model_path), download=False)

    with torch.no_grad():
        output_image = model.predict(img)

    if smoothen:
        output_image = output_image.filter(ImageFilter.SMOOTH)
    width, height = output_image.size
    output_image = output_image.resize((int((1/factor)*width), (int((1/factor)*height))), Image.LANCZOS)
    if debug:
        cprint(f"Scaled from {width}x{height} to {output_image.size[0]}x{output_image.size[1]}", "yellow")
    end = time.time()
    if debug:
        cprint(f"Processing took {(end-start) * 10**3}ms", "yellow")
    return output_image
