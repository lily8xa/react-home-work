import {useEffect, useState} from "react";
import type {ProductType} from "../../models/ProductsType.ts";
import {loadAuthProduct, refresh} from "../../service/services.ts";
import {Product} from "../product/Product.tsx";

export const Products = () => {
    const [products,setProducts]=useState<ProductType[]>([]);
    useEffect(()=>{loadAuthProduct().then(value =>
        setProducts(value))
        .catch(reason => {///якщо токен вмер зловити причину
            console.log(reason);
            refresh()///віпрацьовує відновлення токена
                .then(()=>loadAuthProduct().then(value =>setProducts(value)))////наново виводимо продукти
        });},[])

    return (
        <div>{products.map(product=><Product {...product} key={product.id} />)}</div>
    );
};
