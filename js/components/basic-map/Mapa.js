var Mapa = (function () {
    function Mapa(zoom, idNodeMap, center) {
        this.zoom = zoom;
        this.idNodeMap = idNodeMap;
        this.center = center.split(",");
        this.map = new ol.Map({
            layers: [
                new ol.layer.Tile({
                    preload: Infinity,
                    source: new ol.source.OSM()
                })
            ],
            target: this.idNodeMap,
            controls: ol.control.defaults({
                attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
                    collapsible: false
                })
            }),
            view: new ol.View({
                center: ol.proj.fromLonLat([Number(this.center[0]), Number(this.center[1])]),
                zoom: this.zoom
            })
        });
    }
    Mapa.prototype.initMap = function () {
        console.log("Futuro zoom:" + this.zoom);
        console.log("Futuro center:" + this.center);
    };
    Mapa.prototype.getView = function () {
        return this.map.getView();
    };
    Mapa.prototype.flyTo = function (location, done, view, zoom) {
        var duration = 4000;
        var zoom = zoom;
        var parts = 2;
        var called = false;
        function callback(complete) {
            --parts;
            if (called) {
                return;
            }
            if (parts === 0 || !complete) {
                called = true;
                done(complete);
            }
        }
        view.animate({
            center: location,
            duration: duration
        }, callback);
        view.animate({
            zoom: zoom - 1,
            duration: duration / 2
        }, {
            zoom: zoom,
            duration: duration / 2
        }, callback);
    };
    return Mapa;
}());
