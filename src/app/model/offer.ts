import { Item } from "./item";
import { User } from "./user";

export interface Offer {

    id?:number;
    timing?:Date;
    amount?:number;
    state?:string;
    item?:Item;
    offerer?:User;
}
