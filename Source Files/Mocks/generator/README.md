
# Links

* https://huggingface.co/docs/datasets/image_dataset#imagefolder

https://wandb.ai/msand67/Architecture%20Detection%20Report/reports/How-Well-Can-a-CNN-Detect-Architectural-Style---Vmlldzo1ODUzOTQ

## Model Sources:
* [RotNet](https://drive.google.com/file/d/0B9eNEi5uvOI1SjQ5M2tQY3ZMM1U/view?resourcekey=0-fxeNvoCZNlUrpQkzqZmDzw)

* https://huggingface.co/fcrescio/rotdet?show_file_info=model.safetensors

https://huggingface.co/cmarkea/dit-base-layout-detection

# Setup

Initial setup:
```
conda create -n sd_m1 python=3.10  # Python 3.10 is a good balance for ML
conda activate sd_m1
```

## Dependencies
```
pip install -r requirements.txt
```

## JXLPy

```
LDFLAGS="-L/opt/homebrew/opt/jpeg-xl/lib" CPPFLAGS="-I/opt/homebrew/opt/jpeg-xl/include" pip install  --force-reinstall --no-binary :all: jxlpy
```

## Get the training scripts

```
git clone https://github.com/huggingface/diffusers
cd diffusers/examples/text_to_image
pip install -r requirements.txt
```
