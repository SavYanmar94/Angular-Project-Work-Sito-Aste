import { HomeAddress } from "./home-address";
import { ShippingAddress } from "./shipping-address";

export interface User {

    id?:number;
    entryDate?:Date;
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
}
