import { User } from "./user";

export interface UserItemOffer {
    timing?:Date;
	amount?:number;
	state?:string;
    offerer?:User;
}