export class Image{
    private _url: string
    private _name: string
    private _selected: boolean
   
    constructor(){}

    get url(): string{
        return this._url
    }
    set url(url: string) {
        this._url = url;
     }
     get name(): string{
        return this._name
    }
    set name(name: string) {
        this._name = name;
     }
     get selected(): boolean{
        return this._selected
    }
    set selected(selected: boolean) {
        this._selected = selected;
     }
    
  
}