#!/bin/bash

echo "Set SKIP_IIIF to something to disable generation of IIIF derivates"

if [ -z "$SKIP_IIIF" ] ; then
    ./scripts/iiif.sh
fi

rm -f 'themes/projektemacher-base/patches/mirador+3.0.0.patch'

echo "Calling theme scripts"
for SCRIPT in $PWD/themes/projektemacher-base/scripts/init/*.sh ; do
    echo "Running $SCRIPT"
    bash "$SCRIPT"
done

# Favicons
SOURCE="Source Files/Favicon/Favicon.psd[1]" OPTIONS="-background 'rgba(255, 255, 255, .0)' -resize 300x300 -gravity center -extent 300x300 " ./themes/projektemacher-base/scripts/favicon.sh

yarn run svgo
