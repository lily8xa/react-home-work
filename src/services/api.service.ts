import type {CartType} from "../models/CartType.ts";
import type {DummyUsersType} from "../models/DummyUsersType.ts";

export const baseUrl=import.meta.env.VITE_API_BASE_URL;
// export const getAll=async <T,>(endpoint:string):Promise<T>=>{
//     return await fetch(`${baseUrl}${endpoint}`)
//         .then(res => res.json())
// }
// export const userService=getAll<UserType[]>('/users')
// export const cartsService=getAll<CartType[]>('/carts/user/')
export const userService={
    getAllUsers:async():Promise<DummyUsersType>=>{
        return await fetch(baseUrl+ '/users')
            .then(value => value.json())
    }
}
export const cartService={
    getAllCartsOfUsers:async(userId:string):Promise<CartType[]> => {
        return await fetch(baseUrl+'/carts/user/'+userId)
            .then(value => value.json())
    }
}
