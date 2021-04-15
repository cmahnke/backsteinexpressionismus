Backsteinexpressionismus
========================

# Fixing thin black borders

Probably ScanTailor introduces metadata about crop boxes in the finished Tiff files, under uncertain circumstances these aren't integer, but fractions of pixels. When ImageMagick encounters those bounding boxes in renders the difference in a thin black black line of less then three pixels at the top and right of the image. Trying to set another backgound or fill color doesn't help.
The only currently known workaround is to use `tiff2rgba` of `libtiff` to exract an uncompressed image without metadata und let ImageMagick work with that.

## Dependencies

```
brew install libtiff
```

or

```
sudo port install tiff
```

## Batch conversion

```
find . -name '*.tif' -exec tiff2rgba {} {}-uc.tif \;
find . -name '*-uc.tif' -exec convert {} -quality 95 {}.jpg \;
```

# Converting Images to JPEG with padding

You need ImageMagick 7

```
find . -name '*.tif' -exec magick {} -background white -gravity NorthWest -extent "%[fx:ceil(w/16)*16]x%[fx:ceil(h/16)*16]" {}-padded.tif \;
find . -name '*.tif' -exec magick {} -background white -gravity NorthWest -extent "%[fx:ceil(w/16)*16]x%[fx:ceil(h/16)*16]" -quality 95 {}.jpg \;
```

# Converting Images to lossless Webp

```
convert Logo.tif -define webp:quality=100 -define webp:lossless=true -define webp:method=6 Logo.webp
```

# Generating Tiles

We start to use [LibVIPS]https://github.com/libvips/libvips(), since it's very fast:

On Mac OS X just run:

```
brew install vips
```

## Generate tiles for a single file

```
vips dzsave front.jpg front -t 512 --layout iiif --id '.'
```

## Generating tiles for IIIF Presentation API

```
URL_PREFIX=http://localhost:1313/ ./scripts/iiif.sh
```

# Remove generated IIIF directories

```
find content/post/ -name info.json -exec dirname {} \; | xargs rm -r
```

# Running hugo

## Without watching

This might be needed if there are to many sub directories (with IIIF structures) generated, since watching might not work in this setup.
This stopped to work reliably between Hugo 0.79.0 and 0.81.0

```
hugo serve -F --debug --disableFastRender  --disableLiveReload --watch=false --renderToDisk
```

# Using Docker

```
docker run --name hugo -v `pwd`/docs:/usr/share/nginx/html -p 1313:80 nginx
```
