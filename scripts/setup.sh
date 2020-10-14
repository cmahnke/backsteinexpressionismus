#!/bin/sh

echo "Set SKIP_IIIF to something to disable generation of IIIF derivates"

if [[ -z "$SKIP_IIIF" ]] ; then
    ./scripts/iiif.sh
fi

# Favicons
# See https://gist.github.com/pfig/1808188
convert "Source Files/Favicon/Favicon.psd[1]" -background 'rgba(255, 255, 255, .0)' -resize 300x300 -gravity center -extent 300x300  static/images/favicon.png
convert static/images/favicon.png -resize 256x256 static/images/favicon-256.png
convert static/images/favicon.png -resize 128x128 static/images/favicon-128.png
convert static/images/favicon-128.png -resize 16x16 static/images/favicon-16.png
convert static/images/favicon-128.png -resize 32x32 static/images/favicon-32.png
convert static/images/favicon-128.png -resize 64x64 static/images/favicon-64.png
convert static/images/favicon-16.png static/images/favicon-32.png static/images/favicon-64.png static/images/favicon-128.png -colors 256 static/images/favicon.ico

yarn install
