---
title: Map
params:
  displayinlist: false
  metaPage: true
  overview:
    filter: building
    filterField: type
    view: map
layout: overview-content
weight: 2
---

{{< html/iframe-consent >}}
    {{< maps/osm-vector-tiles src="/lists/buildings/map.geojson" cluster="true" style="map-styles/shortbread.json" marker=`{src: "/images/map-marker.svg", scale: 0.12, anchor: [0.5, 1], anchorXUnits: "fraction", anchorYUnits: "fraction"}` >}}
{{< /html/iframe-consent >}}
