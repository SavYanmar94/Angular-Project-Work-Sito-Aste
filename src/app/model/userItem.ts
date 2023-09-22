import { UserItemOffer } from './userItemOffer';

export interface UserItem {

	id:number;
    placementDate?:Date;
	saleDate?:Date;
	name?:string;
	description?:string;
	auctionBase?:number;
	image?:string;
	state?:string;
	offers?:UserItemOffer[];
	majorOffer?:number;
}