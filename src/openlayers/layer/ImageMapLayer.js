import { Util } from '../core/Util';
/**
 * @class ol.ekmap.ImageMapLayer
 * @classdesc The ImageMapLayer class.
 * @category  Layer
 * @param {Object} options Construction parameters.
 * @param {string} options.url Required: URL of the {@link https://developers.arcgis.com/rest/services-reference/layer-feature-service-.htm|Map Service} with a tile cache.
 * @param {string} options.token Will use this token to authenticate all calls to the service.
 * @param {string} options.projection=4326 Will use this token to authenticate all calls to the service.
 * 
 * 
 * @extends {ol.Evented}
 */
export class ImageMapLayer {

    constructor(options) {
        this.options = options ? options : {};
        if (options) {
            options = Util.setOptions(this, options);

            this.options = Util.getUrlParams(options);
            if (this.options.url)
                this.url = this.options.url;
            this.projection = this.options.projection != undefined ? this.options.projection : 4326;
            if (this.projection == 4326)
                this.proj = 'EPSG:4326'
            else
                this.proj = 'EPSG:3857'

            this.service = new ol.ekmap.MapService(this.options);
            this.layer = null;
        }
    }

    /**
     * @function ol.ekmap.ImageMapLayer.prototype.addTo
     * @description Adds the layer to the given map or layer group.
     * @param {ol.Map} map - Adds the layer to the given map or layer group.
     * @returns this
     */
    addTo(map) {
        var me = this;
        this.service.getExtent(function(extend) {
            if (me.projection == 4326)
                extend = ol.proj.transformExtent([extend.xmin, extend.ymin, extend.xmax, extend.ymax], 'EPSG:3857', 'EPSG:4326');
            me.extend = extend
            var param = {
                bbox: extend,
                layers: 'show',
                format: 'png32',
                dpi: 96,
                transparent: true,
                f: 'image',
                bboxSR: me.projection,
                size: map.getSize()
            };
            me.url += 'export?' + Util.serialize(param);
            if (me.options.token) {
                me.url += ('&token=' + me.options.token);
            }
            me.layer = new ol.layer.Image({
                source: new ol.source.ImageStatic({
                    url: me.url,
                    projection: me.proj,
                    imageExtent: extend
                })
            });
            map.addLayer(me.layer);
            map.getView().fit(extend);
        })
        return me;
    }
}