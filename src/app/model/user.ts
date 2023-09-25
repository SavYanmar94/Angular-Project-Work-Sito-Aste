import { HomeAddress } from "./home-address";
import { Item } from "./item";
import { itemOffers } from "./itemOffers";
import { Offer } from "./offer";
import { ShippingAddress } from "./shipping-address";

export interface User {

    id?:number;
    entryDate?:string;
    name?:string;
    lastname?:string;
    mail?:string;
    taxcode?:string;
    nickname?:string;
    password?:string;
    profileImage?:string;
    profileType?:string;
    authToken?:string;
    homeAddress?:HomeAddress;
    shippingAddress?:ShippingAddress;
    items?:Item[];
    offers?:Offer[];
    itemOffers?:itemOffers[];
}
