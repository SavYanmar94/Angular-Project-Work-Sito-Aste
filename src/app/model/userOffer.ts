import { Item } from "./item";

export interface UserOffer {
    timing?:Date;
	amount?:number;
	state?:string;
    item?:Item;
}