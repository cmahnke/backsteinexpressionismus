/* Inspired from https://openlayers.org/en/latest/examples/iiif.html */

import IIIF from 'ol/source/IIIF';
import IIIFInfo from 'ol/format/IIIFInfo';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import {Control, FullScreen, Rotate, Zoom} from 'ol/control';

var RotateLeftControl = /*@__PURE__*/ (function(Control) {
    function RotateLeftControl(opt_options) {
        var options = opt_options || {};
        const tipLabel = options.tipLabel ? options.tipLabel : 'Rotate 90° left';

        var button = document.createElement('button');
        button.innerHTML = '<i class="icon-left"></i>';
        button.title = tipLabel;

        var element = document.createElement('div');
        element.className = 'rotate-left ol-unselectable ol-control';
        element.appendChild(button);

        Control.call(this, {
            element: element,
            target: options.target,
        });

        button.addEventListener('click', this.handleRotateLeft.bind(this), false);
    }

    if (Control) RotateLeftControl.__proto__ = Control;
    RotateLeftControl.prototype = Object.create(Control && Control.prototype);
    RotateLeftControl.prototype.constructor = RotateLeftControl;

    RotateLeftControl.prototype.handleRotateLeft = function handleRotateLeft() {
        var startRotation = this.getMap().getView().getRotation();
        this.getMap().getView().setRotation(startRotation + (-90 * Math.PI / 180));
    };

    return RotateLeftControl;
}(Control));

var RotateRightControl = /*@__PURE__*/ (function(Control) {
    function RotateRightControl(opt_options) {
        var options = opt_options || {};
        const tipLabel = options.tipLabel ? options.tipLabel : 'Rotate 90° right';

        var button = document.createElement('button');
        button.innerHTML = '<i class="icon-right"></i>';
        button.title = tipLabel;

        var element = document.createElement('div');
        element.className = 'rotate-right ol-unselectable ol-control';
        element.appendChild(button);

        Control.call(this, {
            element: element,
            target: options.target,
        });

        button.addEventListener('click', this.handleRotateRight.bind(this), false);
    }

    if (Control) RotateRightControl.__proto__ = Control;
    RotateRightControl.prototype = Object.create(Control && Control.prototype);
    RotateRightControl.prototype.constructor = RotateRightControl;

    RotateRightControl.prototype.handleRotateRight = function handleRotateRight() {
        var startRotation = this.getMap().getView().getRotation();
        this.getMap().getView().setRotation(startRotation + (90 * Math.PI / 180));
    };

    return RotateRightControl;
}(Control));

window.addMap = function(element, url, rotation, baseURL) {
    var initialRotation = 0;
    if (rotation !== undefined && rotation != 0) {
        initialRotation = rotation * Math.PI / 180;
    }
    // Languages
    var lang = 'en';
    if (document.documentElement.lang !== undefined) {
        lang = document.documentElement.lang;
    }
    var toolTips = { 'de': {'zoomIn': 'Vergrößern', 'zoomOut': 'Verkleinern', 'fullscreen': 'Vollbildansicht', 'rotate': 'Rotation zurücksetzen', 'rotateLeft': '90° nach links drehen', 'rotateRight': '90° nach rechst drehen'},
                     'en': {'zoomIn': 'Zoom in', 'zoomOut': 'Zoom out', 'fullscreen': 'Toggle full-screen', 'rotate': 'Reset rotation', 'rotateLeft': 'Rotate 90° left', 'rotateRight': 'Rotate 90° right'}};

    console.log('Setting up ' + lang);

    var layer = new TileLayer(),
        map = new Map({
            controls: [new Zoom({zoomInTipLabel: toolTips[lang]['zoomIn'], zoomOutTipLabel: toolTips[lang]['zoomOut']}),
                       new FullScreen({tipLabel: toolTips[lang]['fullscreen']}),
                       new Rotate({tipLabel: toolTips[lang]['rotate']}),
                       new RotateLeftControl({tipLabel: toolTips[lang]['rotateLeft']}),
                       new RotateRightControl({tipLabel: toolTips[lang]['rotateRight']})],
            layers: [layer],
            target: element,
        });

    fetch(url)
        .then(function(response) {
            response
                .json()
                .then(function(imageInfo) {
                    var options = new IIIFInfo(imageInfo).getTileSourceOptions();
                    if (options === undefined || options.version === undefined) {
                        console.log('Data seems to be no valid IIIF image information.')
                        return;
                    }
                    options.zDirection = -1;
                    if (baseURL !== undefined) {
                        options.url = baseURL;
                    }
                    var iiifTileSource = new IIIF(options);
                    layer.setSource(iiifTileSource);
                    map.setView(
                        new View({
                            resolutions: iiifTileSource.getTileGrid().getResolutions(),
                            extent: iiifTileSource.getTileGrid().getExtent(),
                            constrainOnlyCenter: true,
                            rotation: initialRotation
                        })
                    );
                    map.getView().fit(iiifTileSource.getTileGrid().getExtent());
                })
                .catch(function(body) {
                    console.log('Could not read image info json. ' + body);
                });
        })
        .catch(function() {
            console.log('Could not read data from URL.');
        });
    return map;
}
