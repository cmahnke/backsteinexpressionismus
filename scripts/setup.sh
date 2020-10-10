#!/bin/sh

echo "Set SKIP_IIIF to something to disable generation of IIIF derivates"

if [[ -z "$SKIP_IIIF" ]] ; then
    ./scripts/iiif.sh
fi
