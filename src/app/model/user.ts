import { HomeAddress } from "./home-address";
import { ShippingAddress } from "./shipping-address";
import { UserItem } from "./userItem";
import { UserOffer } from "./userOffer";

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
    offers?:UserOffer[];
    items?:UserItem[];

}
