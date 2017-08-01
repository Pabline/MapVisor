class Bookmark{

    private id:number;
    private name:string;
    private description:string;
    private center:Array<string>;
    private zoom:number;
    
    constructor (name:string, description:string, center:Array<string>, zoom:number){

        this.name=name;
        this.description=description;
        this.center=center;
        this.zoom=zoom;

    }

    public getName():string{
        return this.name;
    }

    public getDescription():string{
        return this.description;
    }

    public getCenter():Array<string>{
        return this.center;
    }

    public getZoom():number{
        return this.zoom;
    }
    
}