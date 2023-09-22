import { HomeAddress } from "./home-address";
import { ShippingAddress } from "./shipping-address";

export interface OfferUser {
    entryDate?:Date;
    name?:string;
    lastname?:string;
    mail?:string;
    taxcode?:string;
    nickname?:string;
    password?:string;
    profileImage?:string;
    profileType?:string;
    homeAddress?:HomeAddress;
    shippingAddress?:ShippingAddress;
}