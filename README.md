Backsteinexpressionisus
=======================

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
