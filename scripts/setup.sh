#!/bin/sh

WD=`pwd`

# IIFF
for IMAGE in `ls -1 content/post/**/page*.jpg content/post/**/front.jpg`
do
    echo "Generating IIIF files for $IMAGE"
#    iiif_static.py -d `dirname $IMAGE` $IMAGE
done
