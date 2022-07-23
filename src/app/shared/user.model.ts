import { PType } from "./pokemonType.model";

export interface User{
    login:string,
    password:string,
    isSignedIn:boolean,
    cartList:PType []
}