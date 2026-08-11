import {useEffect, useState} from "react";
import type {ProductsType} from "../../models/Products.ts";
import {loadProducts} from "../../servise/api.servise.ts";
import './Products.css'
import {Product} from "../product/Product.tsx";
export const Products = () => {
    const [products,setProducts]=useState<ProductsType[]>([]);
    useEffect(()=>{loadProducts().then(value => setProducts(value))},[])
    return (
        <div className={'products-bac'}>
            {products.map((product=><Product {...product} key={product.id}/>))}
        </div>
    );
};
