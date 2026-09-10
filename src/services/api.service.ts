import type {ProductResponseType} from "../models/ProductType.ts";

const baseUrl=import.meta.env.VITE_API_URL
export const getProducts=async (page:string):Promise<ProductResponseType>=>{
    const limit=5;
    const skip=limit*(+page)-limit;
    const response=await fetch(baseUrl+'/product?limit='+limit+'&skip='+skip)
        .then(value => value.json());
    return response;
}
