import { UserItemOffer } from './userItemOffer';
export interface UserItem {

    placementDate?:Date;
	saleDate?:Date;
	name?:string;
	description?:string;
	auctionBase?:number;
	image?:string;
	state?:string; 
	offers?:UserItemOffer[];
}