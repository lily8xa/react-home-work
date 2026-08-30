import type {CartType} from "../models/CartType.ts";
import {baseUrl} from "./UserService.ts";


export const cartService={
    getAllCartsOfUsers:async(userId:string):Promise<CartType[]> => {
        return await fetch(baseUrl+'/carts/user/'+userId)
            .then(value => value.json())
    }
}
