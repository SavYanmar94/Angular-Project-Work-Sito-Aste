export interface User {

    id?:number;
    entryDate?:Date;
    name?:string;
    lastname?:string;
    mail?:string;
    taxCode?:string;
    nickname?:string;
    password?:string;
    profileImage?:string;
    profileType?:string;
    authToken?:string;
    homeAddress?:/* DA AGGIUNGERE */;
    shippingAddress?: /* DA AGGIUNGERE */;
}
