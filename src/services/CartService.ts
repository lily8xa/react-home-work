import type {DummyCartType} from "../models/CartType.ts";
import {baseUrl} from "./UserService.ts";


export const cartService={
    getAllCartsOfUsers:async(userId:string):Promise<DummyCartType> => {
        return await fetch(baseUrl+'/carts/user/'+userId)
            .then(value => value.json())
    }
}
