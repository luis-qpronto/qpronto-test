import { Addon } from "./addon.model";
import { Allergen } from "./allergen.model";
import { Size } from "./enums/size.enum";

export class Menu {
    private _id: number;
    private _CategoryId: number;
    private _PlateName: string;
    private _Price: number;
    private _items: number;
    private _Addon: Addon[];
    private _Size: Size;
    private _Image: string;
    private _Allergen: Allergen[];

    constructor(id: number, CategoryId: number, PlateName: string, Price: number, items: number, Addon: Addon[], Size: Size, Image: string, Allergen: Allergen[]) {
        this._id = id;
        this._CategoryId = CategoryId;
        this._PlateName = PlateName;
        this._Price = Price;
        this._items = items;
        this._Addon = Addon;
        this._Size = Size;
        this._Image = Image;
        this._Allergen = Allergen;
    }


    public totalItems(): number {
        return this.items + this.Addon.length;
    }

    public getTotalCost(): number {
        return Math.floor((this._items * this._Price) + this.getTotalAddonCost());
    }

    public getTotalAddonCost(): number {
        return this.Addon.map(item => item.price).reduce((sum, current) => sum + current, 0);
    }
    /**
     * Getter id
     * @return {number}
     */
    public get id(): number {
        return this._id;
    }

    /**
     * Getter CategoryId
     * @return {number}
     */
    public get CategoryId(): number {
        return this._CategoryId;
    }

    /**
     * Getter PlateName
     * @return {string}
     */
    public get PlateName(): string {
        return this._PlateName;
    }

    /**
     * Getter Price
     * @return {number}
     */
    public get Price(): number {
        return this._Price;
    }

    /**
     * Getter items
     * @return {number}
     */
    public get items(): number {
        return this._items;
    }

    /**
     * Getter Addon
     * @return {Addon[]}
     */
    public get Addon(): Addon[] {
        return this._Addon;
    }

    /**
     * Getter Size
     * @return {Size}
     */
    public get Size(): Size {
        return this._Size;
    }

    /**
     * Getter Image
     * @return {string}
     */
    public get Image(): string {
        return this._Image;
    }

    /**
     * Getter Allergen
     * @return {Allergen[]}
     */
    public get Allergen(): Allergen[] {
        return this._Allergen;
    }

    /**
     * Setter id
     * @param {number} value
     */
    public set id(value: number) {
        this._id = value;
    }

    /**
     * Setter CategoryId
     * @param {number} value
     */
    public set CategoryId(value: number) {
        this._CategoryId = value;
    }

    /**
     * Setter PlateName
     * @param {string} value
     */
    public set PlateName(value: string) {
        this._PlateName = value;
    }

    /**
     * Setter Price
     * @param {number} value
     */
    public set Price(value: number) {
        this._Price = value;
    }

    /**
     * Setter items
     * @param {number} value
     */
    public set items(value: number) {
        this._items = value;
    }

    /**
     * Setter Addon
     * @param {Addon[]} value
     */
    public set Addon(value: Addon[]) {
        this._Addon = value;
    }

    /**
     * Setter Size
     * @param {Size} value
     */
    public set Size(value: Size) {
        this._Size = value;
    }

    /**
     * Setter Image
     * @param {string} value
     */
    public set Image(value: string) {
        this._Image = value;
    }

    /**
     * Setter Allergen
     * @param {Allergen[]} value
     */
    public set Allergen(value: Allergen[]) {
        this._Allergen = value;
    }





    // public totalItems: number(){
    //     return items + Addon.si
    // }
}