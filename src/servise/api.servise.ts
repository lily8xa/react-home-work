import type {ProductsType} from "../models/Products.ts";

const endpointProducts=import.meta.env.VITE_API_BASE_URL +'/products'
export const loadProducts=async ():Promise<ProductsType[]>=>{
    return await fetch(endpointProducts).then(value => value.json())
}
