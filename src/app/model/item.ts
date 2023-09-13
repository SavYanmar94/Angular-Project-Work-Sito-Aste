export interface Item {

    id?:number;
    placementDate?:Date;
    saleDate?:Date;
    name?:string;
    description?:string;
    auctionBase?:number;
    image?:string;
    state?:string;
    seller?: /* DA AGGIUNGERE */;
}
