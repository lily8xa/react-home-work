import type {UserResponseType} from "../models/UserType.ts";

const baseUrl=import.meta.env.VITE_API_URL
export const getUsers=async(page:string):Promise<UserResponseType>=>{
    const limit=30;
    const skip=limit*(+page)-limit;
    const response=await fetch(baseUrl+'/users'+'?skip='+skip)
        .then(value => value.json())
    return response;
}
