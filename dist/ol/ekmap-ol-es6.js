/*!
 * 
 *          ekmap-ol.(https://ekgis.com.vn/)
 *          Copyright© 2009 - 2020 eKGIS
 *          license: Apache-2.0
 *          version: v0.0.1
 *         
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/openlayers/control/BaseLayer.js":
/*!*********************************************!*\
  !*** ./src/openlayers/control/BaseLayer.js ***!
  \*********************************************/
/*! exports provided: BaseLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BaseLayer\", function() { return BaseLayer; });\n/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/Map */ \"ol/Map\");\n/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ol_Map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/View */ \"ol/View\");\n/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ol_View__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/layer/Tile */ \"ol/layer/Tile\");\n/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ol_layer_Tile__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/source/OSM */ \"ol/source/OSM\");\n/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ol_source_OSM__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ol_control_BaseLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/control/BaseLayer */ \"ol/control/BaseLayer\");\n/* harmony import */ var ol_control_BaseLayer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ol_control_BaseLayer__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/proj */ \"ol/proj\");\n/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ol_proj__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ol_AssertionError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/AssertionError */ \"ol/AssertionError\");\n/* harmony import */ var ol_AssertionError__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ol_AssertionError__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var ol_control_Control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/control/Control */ \"ol/control/Control\");\n/* harmony import */ var ol_control_Control__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ol_control_Control__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var ol_control_ScaleLine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/control/ScaleLine */ \"ol/control/ScaleLine\");\n/* harmony import */ var ol_control_ScaleLine__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ol_control_ScaleLine__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! echarts */ \"echarts\");\n/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_9__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/**\r\n * @class ol.ekmap.control.BaseLayer\r\n * @category  Control\r\n * @classdesc A control displaying rough y-axis distances, calculated for the center of the viewport. For conformal projections <br>(e.g. EPSG:3857, the default view projection in OpenLayers), the scale is valid for all directions. No scale line will be <br>shown when the y-axis distance of a pixel at the viewport center cannot be calculated in the view projection. By <br> default the scale line will show in the bottom left portion of the map, but this can be changed by using the css <br> selector .ol-scale-line. When specifying bar as true, a scalebar will be rendered instead of a BaseLayer..\r\n * @extends {ol/control/BaseLayer}\r\n * @param {options} options Scale line options.\r\n * @param {string} options.className CSS Class name.\r\n * @param {number} options.minWidth=64 Minimum width in pixels at the OGC default dpi. The width will be adjusted to match the dpi used.\r\n * @param {(HTMLElement|string) } options.target Specify a target if you want the control to be rendered outside of the map's viewport.\r\n * @param {(ol.control.BaseLayerUnits|string)} options.units='metric' Units.\r\n * @example\r\n * var control = new ol.ekmap.control.BaseLayer();\r\n *      map.addControl(control)\r\n */\r\nclass BaseLayer extends ol_control_Control__WEBPACK_IMPORTED_MODULE_7___default.a {\r\n\r\n    constructor(options) {\r\n        options = options || {};\r\n\r\n        super({\r\n            element: document.createElement('div'),\r\n            target: options.target,\r\n        });\r\n        this.test = 20;\r\n        this.show = false;\r\n        /**\r\n         * @private\r\n         * @type {HTMLElement}\r\n         */\r\n        var element = this.element;\r\n        element.className = 'ekmap-bl ol-unselectable ol-control ekmap-bl-layer-open';\r\n        var div = document.createElement('div');\r\n        div.className = 'ekmap-bl-bg ekmap-bl-layer-bt';\r\n        element.appendChild(div);\r\n        var layers = map.getLayers();\r\n        layers.forEach(layer => {\r\n            var divLayer = document.createElement('div');\r\n            divLayer.onclick = function() {\r\n                this.show = !this.show;\r\n                if (!layer.values_.visible)\r\n                    layer.setVisible(true)\r\n            }\r\n            if (layer.values_.visible)\r\n                divLayer.className = 'ekmap-bl-bg ekmap-bl-layer ol-unselectable ol-control active';\r\n            else\r\n                divLayer.className = 'ekmap-bl-bg ekmap-bl-layer ol-unselectable ol-control';\r\n            divLayer.style.zIndex = 1;\r\n            divLayer.style.background = 'url(\"https://g3.cloudgis.vn/gservices/rest/maps/roadmap/tile/5/25/14.png?apikey=1-B27W7NTVd63eQdYAqOuEx8o3qTxDETo9\") 0% 0% / cover no-repeat rgb(255, 255, 255)';\r\n            divLayer.style.transition = 'transform 0.5s ease 0s, bottom 0.5s ease 0s, width 0.5s ease 0s, -webkit-transform 0.5s ease 0s';\r\n            divLayer.style.transform = 'translateX(' + this.test + 'px)';\r\n            divLayer.style.padding = '0px';\r\n            var divText = document.createElement('div');\r\n            divText.setAttribute('class', 'ekmap-bl-bg-text');\r\n            divText.title = layer.values_.name;\r\n            divText.innerHTML = layer.values_.name;\r\n            divLayer.appendChild(divText);\r\n            element.appendChild(divLayer);\r\n            this.test += 100\r\n        });\r\n\r\n    }\r\n\r\n    setMap(map) {\r\n        console.log(map)\r\n        super.setMap(map);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/openlayers/control/BaseLayer.js?");

/***/ }),

/***/ "./src/openlayers/control/ScaleLine.js":
/*!*********************************************!*\
  !*** ./src/openlayers/control/ScaleLine.js ***!
  \*********************************************/
/*! exports provided: ScaleLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScaleLine\", function() { return ScaleLine; });\n/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/Map */ \"ol/Map\");\n/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ol_Map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/View */ \"ol/View\");\n/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ol_View__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/layer/Tile */ \"ol/layer/Tile\");\n/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ol_layer_Tile__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/source/OSM */ \"ol/source/OSM\");\n/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ol_source_OSM__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ol_control_ScaleLine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/control/ScaleLine */ \"ol/control/ScaleLine\");\n/* harmony import */ var ol_control_ScaleLine__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ol_control_ScaleLine__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/proj */ \"ol/proj\");\n/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ol_proj__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ol_AssertionError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/AssertionError */ \"ol/AssertionError\");\n/* harmony import */ var ol_AssertionError__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ol_AssertionError__WEBPACK_IMPORTED_MODULE_6__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/**\r\n * @class ol.ekmap.control.ScaleLine\r\n * @category  Control\r\n * @classdesc A control displaying rough y-axis distances, calculated for the center of the viewport. For conformal projections <br>(e.g. EPSG:3857, the default view projection in OpenLayers), the scale is valid for all directions. No scale line will be <br>shown when the y-axis distance of a pixel at the viewport center cannot be calculated in the view projection. By <br> default the scale line will show in the bottom left portion of the map, but this can be changed by using the css <br> selector .ol-scale-line. When specifying bar as true, a scalebar will be rendered instead of a scaleline..\r\n * @extends {ol/control/ScaleLine}\r\n * @param {options} options Scale line options.\r\n * @param {string} options.className='ol-scale-line' CSS Class name.\r\n * @param {number} options.minWidth=64 Minimum width in pixels at the OGC default dpi. The width will be adjusted to match the dpi used.\r\n * @param {(HTMLElement|string) } options.target Specify a target if you want the control to be rendered outside of the map's viewport.\r\n * @param {(ol.control.ScaleLineUnits|string)} options.units='metric' Units.\r\n * @example\r\n * var control = new ol.ekmap.control.ScaleLine();\r\n *      map.addControl(control)\r\n */\r\nclass ScaleLine extends ol_control_ScaleLine__WEBPACK_IMPORTED_MODULE_4___default.a {\r\n\r\n    constructor(options) {\r\n        options = options || {};\r\n        options.render = function (mapEvent) {\r\n            var frameState = mapEvent.frameState;\r\n            if (!frameState) {\r\n                this.viewState_ = null;\r\n            } else {\r\n                this.viewState_ = frameState.viewState;\r\n            }\r\n            this.updateElementRepair();\r\n        }\r\n        super(options);\r\n    }\r\n\r\n    updateElementRepair() {\r\n        const viewState = this.viewState_ || this.o;\r\n\r\n        if (!viewState) {\r\n            this.renderedVisible_ = this.renderedVisible_ || this.j;\r\n            if (this.renderedVisible_) {\r\n                this.element_ = this.element_ || this.c;\r\n                this.element.style.display = 'none';\r\n                this.renderedVisible_ = false;\r\n            }\r\n            return;\r\n        }\r\n\r\n        const center = viewState.center;\r\n        const projection = viewState.projection;\r\n        const units = this.getUnits();\r\n        const pointResolutionUnits = units == \"degrees\" ?\r\n            \"degrees\" :\r\n            \"m\";\r\n        let pointResolution =\r\n            ol_proj__WEBPACK_IMPORTED_MODULE_5__[\"getPointResolution\"](projection, viewState.resolution, center, pointResolutionUnits);\r\n        this.minWidth_ = this.minWidth_ || this.v;\r\n        let nominalCount = this.minWidth_ * pointResolution;\r\n        let suffix = '';\r\n        if (units == \"degrees\") {\r\n            const metersPerDegree = ol_proj__WEBPACK_IMPORTED_MODULE_5__[\"METERS_PER_UNIT\"][\"degrees\"];\r\n            nominalCount *= metersPerDegree;\r\n            if (nominalCount < metersPerDegree / 60) {\r\n                suffix = '\\u2033'; // seconds\r\n                pointResolution *= 3600;\r\n            } else if (nominalCount < metersPerDegree) {\r\n                suffix = '\\u2032'; // minutes\r\n                pointResolution *= 60;\r\n            } else {\r\n                suffix = '\\u00b0'; // degrees\r\n            }\r\n        } else if (units == \"imperial\") {\r\n            if (nominalCount < 0.9144) {\r\n                suffix = 'in';\r\n                pointResolution /= 0.0254;\r\n            } else if (nominalCount < 1609.344) {\r\n                suffix = 'ft';\r\n                pointResolution /= 0.3048;\r\n            } else {\r\n                suffix = 'mi';\r\n                pointResolution /= 1609.344;\r\n            }\r\n        } else if (units == \"nautical\") {\r\n            pointResolution /= 1852;\r\n            suffix = 'nm';\r\n        } else if (units == \"metric\") {\r\n            if (nominalCount < 0.001) {\r\n                suffix = 'μm';\r\n                pointResolution *= 1000000;\r\n            } else if (nominalCount < 1) {\r\n                suffix = 'mm';\r\n                pointResolution *= 1000;\r\n            } else if (nominalCount < 1000) {\r\n                suffix = 'm';\r\n            } else {\r\n                suffix = 'km';\r\n                pointResolution /= 1000;\r\n            }\r\n        } else if (units == \"us\") {\r\n            if (nominalCount < 0.9144) {\r\n                suffix = 'in';\r\n                pointResolution *= 39.37;\r\n            } else if (nominalCount < 1609.344) {\r\n                suffix = 'ft';\r\n                pointResolution /= 0.30480061;\r\n            } else {\r\n                suffix = 'mi';\r\n                pointResolution /= 1609.3472;\r\n            }\r\n        } else {\r\n            throw new ol_AssertionError__WEBPACK_IMPORTED_MODULE_6___default.a(33); // Invalid units\r\n        }\r\n        var DIGITS = [1, 2, 5];\r\n        let i = 3 * Math.floor(\r\n            Math.log(this.minWidth_ * pointResolution) / Math.log(10));\r\n        let count, width, decimalCount;\r\n        while (true) { //eslint-disable-line no-constant-condition\r\n            decimalCount = Math.floor(i / 3);\r\n            const decimal = Math.pow(10, decimalCount);\r\n            count = DIGITS[((i % 3) + 3) % 3] * decimal;\r\n            width = Math.round(count / pointResolution);\r\n            if (isNaN(width)) {\r\n                this.element.style.display = 'none';\r\n                this.renderedVisible_ = false;\r\n                return;\r\n            } else if (width >= this.minWidth_) {\r\n                break;\r\n            }\r\n            ++i;\r\n        }\r\n        this.renderedHTML_ = this.renderedHTML_ || this.D;\r\n        this.innerElement_ = this.innerElement_ || this.l;\r\n        this.renderedWidth_ = this.renderedWidth_ || this.B;\r\n        this.renderedVisible_ = this.renderedVisible_ || this.j;\r\n        this.element_ = this.element_ || this.c;\r\n        let html = count.toFixed(decimalCount < 0 ? -decimalCount : 0) + ' ' + suffix;\r\n        if (this.renderedHTML_ != html) {\r\n            this.innerElement_.innerHTML = html;\r\n            this.renderedHTML_ = html;\r\n        }\r\n\r\n        if (this.renderedWidth_ != width) {\r\n            this.innerElement_.style.width = width + 'px';\r\n            this.renderedWidth_ = width;\r\n        }\r\n\r\n        if (!this.renderedVisible_) {\r\n            this.element.style.display = '';\r\n            this.renderedVisible_ = true;\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/openlayers/control/ScaleLine.js?");

/***/ }),

/***/ "./src/openlayers/control/index.js":
/*!*****************************************!*\
  !*** ./src/openlayers/control/index.js ***!
  \*****************************************/
/*! exports provided: ScaleLine, BaseLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ScaleLine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScaleLine */ \"./src/openlayers/control/ScaleLine.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ScaleLine\", function() { return _ScaleLine__WEBPACK_IMPORTED_MODULE_0__[\"ScaleLine\"]; });\n\n/* harmony import */ var _BaseLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseLayer */ \"./src/openlayers/control/BaseLayer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BaseLayer\", function() { return _BaseLayer__WEBPACK_IMPORTED_MODULE_1__[\"BaseLayer\"]; });\n\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/openlayers/control/index.js?");

/***/ }),

/***/ "./src/openlayers/css/index.js":
/*!*************************************!*\
  !*** ./src/openlayers/css/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ \"./src/openlayers/css/style.css\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/openlayers/css/index.js?");

/***/ }),

/***/ "./src/openlayers/css/style.css":
/*!**************************************!*\
  !*** ./src/openlayers/css/style.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/openlayers/css/style.css?");

/***/ }),

/***/ "./src/openlayers/layer/TiledVietNamMapLayer.js":
/*!******************************************************!*\
  !*** ./src/openlayers/layer/TiledVietNamMapLayer.js ***!
  \******************************************************/
/*! exports provided: TiledVietNamMapLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TiledVietNamMapLayer\", function() { return TiledVietNamMapLayer; });\n/* harmony import */ var ol_source_TileImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/source/TileImage */ \"ol/source/TileImage\");\n/* harmony import */ var ol_source_TileImage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ol_source_TileImage__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n/**\r\n * @class ol.ekmap.TiledVietNamMapLayer\r\n * @classdesc The TiledVietNamMapLayer class.\r\n * @category  Layer\r\n * @param {Object} options  Construction parameters.\r\n * @param {string} options.token  Will use this token to authenticate all calls to the service.\r\n * @param {string} options.attribution Contains an attribution to be displayed when the map is shown to a user.\r\n * @extends {ol.ekmap.TileLayer}\r\n * @example\r\n * var map = new ol.Map({\r\n *     container: 'map',\r\n *     center: [103.9, 22.2],\r\n *     zoom: 6\r\n * });\r\n * var vnMap = new ol.ekmap.TiledVietNamMapLayer({\r\n *      token: {YOUR_API_KEY}\r\n * })\r\n *   .addTo(map);\r\n */\r\nclass TiledVietNamMapLayer extends ol_source_TileImage__WEBPACK_IMPORTED_MODULE_0___default.a {\r\n\r\n    constructor(options) {\r\n        options = options || {};\r\n\r\n        options.attributions = options.attributions || \"<a href='https://www.mapbox.com/about/maps/' target='_blank'>© Map </a>\" +\r\n            \"by <a href='http://ekgis.com.vn/' target='_blank' style='color: blue'>eKGIS</a>\";\r\n\r\n        options.urls = [\r\n            \"https://mt0.ekgis.vn/gserver/rest/services/imagetile/1472/2075/tile/{z}/{x}/{y}.png\",\r\n            \"https://mt1.ekgis.vn/gserver/rest/services/imagetile/1472/2075/tile/{z}/{x}/{y}.png\",\r\n            \"https://mt2.ekgis.vn/gserver/rest/services/imagetile/1472/2075/tile/{z}/{x}/{y}.png\",\r\n            \"https://mt3.ekgis.vn/gserver/rest/services/imagetile/1472/2075/tile/{z}/{x}/{y}.png\"\r\n        ];\r\n        options.urlsToken = [];\r\n        if (options)\r\n            options.urls.forEach(url => {\r\n                url += \"?apikey=\" + options.token;\r\n                options.urlsToken.push(url);\r\n            })\r\n        super({\r\n            attributions: options.attributions,\r\n            urls: options.urlsToken,\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/openlayers/layer/TiledVietNamMapLayer.js?");

/***/ }),

/***/ "./src/openlayers/layer/index.js":
/*!***************************************!*\
  !*** ./src/openlayers/layer/index.js ***!
  \***************************************/
/*! exports provided: TiledVietNamMapLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TiledVietNamMapLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TiledVietNamMapLayer */ \"./src/openlayers/layer/TiledVietNamMapLayer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TiledVietNamMapLayer\", function() { return _TiledVietNamMapLayer__WEBPACK_IMPORTED_MODULE_0__[\"TiledVietNamMapLayer\"]; });\n\n\n\n//# sourceURL=webpack:///./src/openlayers/layer/index.js?");

/***/ }),

/***/ "./src/openlayers/namespace.js":
/*!*************************************!*\
  !*** ./src/openlayers/namespace.js ***!
  \*************************************/
/*! exports provided: ScaleLine, BaseLayer, TiledVietNamMapLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control */ \"./src/openlayers/control/index.js\");\n/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layer */ \"./src/openlayers/layer/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ScaleLine\", function() { return _control__WEBPACK_IMPORTED_MODULE_0__[\"ScaleLine\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BaseLayer\", function() { return _control__WEBPACK_IMPORTED_MODULE_0__[\"BaseLayer\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TiledVietNamMapLayer\", function() { return _layer__WEBPACK_IMPORTED_MODULE_1__[\"TiledVietNamMapLayer\"]; });\n\n\n\n\nif (window && window.ol) {\n    let ol = window.ol;\n    ol.ekmap = window.ol.ekmap || {};\n    ol.ekmap.control = window.ol.ekmap.control || {};\n    // control\n    ol.ekmap.control.ScaleLine = _control__WEBPACK_IMPORTED_MODULE_0__[\"ScaleLine\"];\n    ol.ekmap.control.BaseLayer = _control__WEBPACK_IMPORTED_MODULE_0__[\"BaseLayer\"];\n    ol.ekmap.TiledVietNamMapLayer = _layer__WEBPACK_IMPORTED_MODULE_1__[\"TiledVietNamMapLayer\"];\n    // core\n\n    // mapping\n\n    // overlay\n\n    // service\n}\n\n\n\n//# sourceURL=webpack:///./src/openlayers/namespace.js?");

/***/ }),

/***/ 0:
/*!*************************************************************************!*\
  !*** multi ./src/openlayers/namespace.js ./src/openlayers/css/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! D:\\Dev\\eKMap\\eKMap-Client\\src\\openlayers\\namespace.js */\"./src/openlayers/namespace.js\");\nmodule.exports = __webpack_require__(/*! D:\\Dev\\eKMap\\eKMap-Client\\src\\openlayers\\css\\index.js */\"./src/openlayers/css/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/openlayers/namespace.js_./src/openlayers/css/index.js?");

/***/ }),

/***/ "echarts":
/*!***********************************************************************!*\
  !*** external "function(){try{return echarts}catch(e){return {}}}()" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(){try{return echarts}catch(e){return {}}}();\n\n//# sourceURL=webpack:///external_%22function()%7Btry%7Breturn_echarts%7Dcatch(e)%7Breturn_%7B%7D%7D%7D()%22?");

/***/ }),

/***/ "ol/AssertionError":
/*!************************************!*\
  !*** external "ol.AssertionError" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ol.AssertionError;\n\n//# sourceURL=webpack:///external_%22ol.AssertionError%22?");

/***/ }),

/***/ "ol/Map":
/*!*************************!*\
  !*** external "ol.Map" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ol.Map;\n\n//# sourceURL=webpack:///external_%22ol.Map%22?");

/***/ }),

/***/ "ol/View":
/*!**************************!*\
  !*** external "ol.View" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ol.View;\n\n//# sourceURL=webpack:///external_%22ol.View%22?");

/***/ }),

/***/ "ol/control/BaseLayer":
/*!***************************************!*\
  !*** external "ol.control.BaseLayer" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ol.control.BaseLayer;\n\n//# sourceURL=webpack:///external_%22ol.control.BaseLayer%22?");

/***/ }),

/***/ "ol/control/Control":
/*!*************************************!*\
  !*** external "ol.control.Control" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ol.control.Control;\n\n//# sourceURL=webpack:///external_%22ol.control.Control%22?");

/***/ }),

/***/ "ol/control/ScaleLine":
/*!***************************************!*\
  !*** external "ol.control.ScaleLine" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ol.control.ScaleLine;\n\n//# sourceURL=webpack:///external_%22ol.control.ScaleLine%22?");

/***/ }),

/***/ "ol/layer/Tile":
/*!********************************!*\
  !*** external "ol.layer.Tile" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ol.layer.Tile;\n\n//# sourceURL=webpack:///external_%22ol.layer.Tile%22?");

/***/ }),

/***/ "ol/proj":
/*!**************************!*\
  !*** external "ol.proj" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ol.proj;\n\n//# sourceURL=webpack:///external_%22ol.proj%22?");

/***/ }),

/***/ "ol/source/OSM":
/*!********************************!*\
  !*** external "ol.source.OSM" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ol.source.OSM;\n\n//# sourceURL=webpack:///external_%22ol.source.OSM%22?");

/***/ }),

/***/ "ol/source/TileImage":
/*!**************************************!*\
  !*** external "ol.source.TileImage" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ol.source.TileImage;\n\n//# sourceURL=webpack:///external_%22ol.source.TileImage%22?");

/***/ })

/******/ });