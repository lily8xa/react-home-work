import {useEffect, useState} from "react";
import type {ProductType} from "../../models/ProductType.ts";
import {useSearchParams} from "react-router";
import {getProducts} from "../../services/api.service.ts";
import {Product} from "../product/Product.tsx";

export const Products = () => {
    const [products,setProducts]=useState<ProductType[]>([]);
    const [query]=useSearchParams();
    useEffect(() => {
        getProducts(query.get('page') || '1')
            .then(value => setProducts(value.product))
    }, [query]);
    return (
        <div>{products.map(product=><Product key={product.id} {...product}/>)}</div>
    );
};
