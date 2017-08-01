declare var ol;

class Mapa {

    private map: any;
    private zoom: number;
    private idNodeMap: string;
    private center: Array<string>;

    constructor(zoom: number, idNodeMap: string, center: String) {
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
                center: ol.proj.fromLonLat([Number(this.center[0]),Number(this.center[1])]),
                zoom: this.zoom
            })
        });
    }

    public initMap() {
        console.log("Futuro zoom:" + this.zoom)
        console.log("Futuro center:" + this.center)
    }

    public getView(): any{
        return this.map.getView();
    }

    public flyTo(location:string, done:any, view:any, zoom:number){
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
    }

    
}