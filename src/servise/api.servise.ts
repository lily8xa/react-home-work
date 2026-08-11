import type {JsonProductsType, ProductsType} from "../models/Products.ts";

const endpointProducts=import.meta.env.VITE_API_BASE_URL +'/products'
export const loadProducts=async ():Promise<ProductsType[]>=>{
    const response:JsonProductsType=await fetch(endpointProducts).then(value => value.json())
    return response.products
}
