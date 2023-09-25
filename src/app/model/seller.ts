import { HomeAddress } from "./home-address";
import { ShippingAddress } from "./shipping-address";

export interface Seller {
    entryDate?:Date;
    name?:string;
    lastname?:string;
    mail?:string;
    taxcode?:string;
    nickname?:string;
    profileImage?:string;
    homeAddress?:HomeAddress;
    shippingAddress?:ShippingAddress;
}