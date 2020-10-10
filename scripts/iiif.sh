#!/bin/sh

TILE_SIZE=512
IIIF_STATIC_CMD=""
OUTPUT_PREFIX=""

if ! command -v vips &> /dev/null
then
    echo "vips could not be found, using python"
    IIIF_STATIC_CMD="iiif_static.py"
else
    VIPS_VERSION=`vips -v | cut -d '-' -f 2`
    VIPS_MAJOR=`echo $VIPS_VERSION | cut -d . -f 1`
    VIPS_MINOR=`echo $VIPS_VERSION | cut -d . -f 2`

    if [[ $VIPS_MAJOR -lt 8 && $VIPS_MINOR -lt 10 ]] ; then
        echo "vips is to old, falling back to python"
        IIIF_STATIC_CMD="iiif_static.py"
    else
        IIIF_STATIC_CMD="vips"
    fi

fi

# IIFF
for IMAGE in `ls -1 content/post/**/page*.jpg content/post/**/front.jpg content/post/**/end.jpg content/post/**/title.jpg content/post/**/*-recto.jpg content/post/**/*-verso.jpg content/post/**/img*.jpg`
do
    OUTPUT_DIR=`dirname $IMAGE`
    IIIF_DIR=`basename -s .jpg $IMAGE`
    if [ $OUTPUT_PREFIX = ""] ; then
        TARGET=$OUTPUT_DIR/$IIIF_DIR
    else
        TARGET=$OUTPUT_PREFIX/$OUTPUT_DIR/$IIIF_DIR
        mkdir -p $TARGET
    fi
    echo "Generating IIIF files for $IMAGE in directory $OUTPUT_DIR, IIIF directory $IIIF_DIR ($TARGET)"
    if [ $IIIF_STATIC_CMD = "vips" ] ; then
        vips dzsave $IMAGE $TARGET -t $TILE_SIZE --layout iiif --id '.'
    elif [ $IIIF_STATIC_CMD = "iiif_static.py" ] ; then
        iiif_static.py -d $TARGE -i '.' -t $TILE_SIZE $IMAGE
    fi
done
