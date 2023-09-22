import { Item } from "./item";
import { OfferUser } from "./offerUser";
import { User } from "./user";

export interface Offer {

    id?:number;
    timing?:Date;
    amount?:number;
    state?:string;
    user?:OfferUser;
    items?:Item;
}
