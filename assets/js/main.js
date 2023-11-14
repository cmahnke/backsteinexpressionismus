/*
window.$ = window.jQuery = require('jquery');
*/
require('./iiif-image-viewer');
import { initMap } from './maps/osm-map.js';
import { addConsent } from './iframe-consent';

window.addConsent = addConsent;
window.initMap = initMap;
