---
title: Karte
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
    {{< maps/osm src="/lists/buildings/map.geojson" cluster="true" >}}
{{< /html/iframe-consent >}}
