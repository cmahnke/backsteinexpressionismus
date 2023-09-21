#!/bin/sh

hugo --disableKinds=pages,category,sitemap,RSS,404,robotsTXT,home
python themes/projektemacher-base/scripts/bbox.py -f docs/tags/map.geojson -j -m 100000 > assets/js/bbox.json
