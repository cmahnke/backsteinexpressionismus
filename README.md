Backsteinexpressionisus
=======================

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
