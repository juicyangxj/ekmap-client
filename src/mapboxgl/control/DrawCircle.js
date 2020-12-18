import '../core/Base';
import mapboxgl from 'mapbox-gl';
const MapboxCircle = require('mapbox-gl-circle');

/**
 * @class mapboxgl.ekmap.control.DrawCircle
 * @category  Control
 * @classdesc DrawCircle.
 *
 * @param {Object} options Construction parameters.
 * @param {Boolean} options.editable=false Enable handles for changing center and radius.
 * @param {String} options.fillColor=#fbb03b Fill color.
 * @param {Number} options.fillOpacity=0.25 Fill opacity.
 * @param {Number} options.strokeColor=#fbb03b Stroke color.
 * @param {string} options.target Specify a target if you want the control to be rendered outside of the map's viewport.</br> If target is equal to null or undefined, control will render by default. 
 * 
 * @example
 *  var map = new mapboxgl.Map({
 *      //config....,
 *  })
 *  map.addControl(new mapboxgl.ekmap.control.DrawCircle({
 *          editable : true,
 *          target: // the id attribute of target
 * }),'bottom-right');
 */
export class DrawCircle extends mapboxgl.Evented {

    constructor(options) {
        super(options);
        this.options = options ? options : {};
        this.target = this.options.target;
        this.active = false;
        this.radius = undefined;
        this.listeners = {};
        this.drawCircle = ''
    }

    /**
     * @function mapboxgl.ekmap.control.DrawCircle.prototype.onAdd
     * @description Register a control on the map and give it a chance to register event listeners and resources. This method is called by Map#addControl internally.
     * @param {Map} map the Map this control will be added to.
     * @returns {HTMLElement}  The control's container element. This should be created by the control and returned by onAdd without being attached to the DOM: the map will insert the control's element into the DOM as necessary.
     */
    onAdd(map) {
        this._map = map;
        this._div = document.createElement('div');
        this._div.title = "Click DrawCircle";
        this._div.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
        this._div.style.fontSize = "14px";
        let input = this.createLayerInputToggle();
        let me = this; //might use this later
        var cursorDom = $('.mapboxgl-canvas-container')
        input.addEventListener("click", function(e) {
            me.active = !me.active
            if (me.active) {
                cursorDom[0].style.cursor = 'help';
                /**
                 * @event mapboxgl.ekmap.control.DrawCircle#startDrawCircle
                 * @description Fired when start control.
                 */
                me.fire('startDrawCircle', me);
                me.offEvent();
                me.listeners["click"] = me.onClick.bind(me);
                me._map.on('click', me.listeners["click"]);
            } else {
                cursorDom[0].style.cursor = 'grab';
                /**
                 * @event mapboxgl.ekmap.control.DrawCircle#unDrawCircle
                 * @description Fired when cancel control.
                 */
                me.offEvent();
                me.fire('unDrawCircle', me);
            }
        })
        if (!this.target)
            this._div.appendChild(input)

        return this._div;
    }

    /**
     * @function mapboxgl.ekmap.control.DrawCircle.prototype.onRemove
     * @description Unregister a control on the map and give it a chance to detach event listeners and resources. This method is called by Map#removeControl internally.
     * @param {Map} map the Map this control will be removed from.
     * @returns {undefined}  there is no required return value for this method.
     */
    onRemove(map) {
        this._map = map;
        this._div.parentNode.removeChild(this._div);
        this._map = undefined;
    }

    /**
     * @private
     * @description Create layer input
     */
    createLayerInputToggle() {
        if (!this.target) {
            var button = document.createElement("button");
            var icon = document.createElement("i");
            icon.className = "fa fa-circle-thin";
            button.className = "mapboxgl-ctrl-zoom-in"
            button.appendChild(icon);
        } else {
            var button = document.getElementById(this.target);
        }
        return button;
    }

    onClick(e) {
        if (this.drawCircle)
            this.drawCircle.remove();
        this.drawCircle = new MapboxCircle({ lat: e.lngLat.lat, lng: e.lngLat.lng }, this.radius != undefined ? this.radius : 2000, {
            editable: this.options.editable != undefined ? this.options.editable : false,
            fillColor: this.options.fillColor != undefined ? this.options.fillColor : '#fbb03b',
            fillOpacity: this.options.fillOpacity != undefined ? this.options.fillOpacity : 0.25,
            strokeColor: this.options.strokeColor != undefined ? this.options.strokeColor : '#fbb03b',
            strokeWeight: 0.5,
            strokeOpacity: 0.75
        }).addTo(this._map);
        /**
         * @event mapboxgl.ekmap.control.DrawCircle#circleDrawn
         * @description Fired when circle drawn
         */
        this.fire('circleDrawn', this.drawCircle);

    }

    offEvent() {
        for (var evt in this.listeners) {
            this._map.off('click', this.listeners[evt]);
        }
        this.listeners = {};
    }

    /**
     * @function mapboxgl.ekmap.control.DrawCircle.prototype.setRadius
     * @description Change radius of circel.
     * @param {number} newRadius Meter radius.
     */
    setRadius(newRadius) {
        this.radius = newRadius
    }

    /**
     * @function mapboxgl.ekmap.control.DrawCircle.prototype.deactivate
     * @description deactivate control DrawCircle.
     */
    deactivate() {
        if (this.drawCircle) {
            this.drawCircle.remove();
            this.drawCircle = ''
        }

        var cursorDom = $('.mapboxgl-canvas-container')
        cursorDom[0].style.cursor = 'grab';
        this.offEvent();
        // this._map.off('click', this.onClick);
        this.fire('unDrawCircle', this);
        this.active = false;
    }

    /**
     *@private
     */
    remove() {
        this.drawCircle.remove();
    }
}

mapboxgl.ekmap.control.DrawCircle = DrawCircle;