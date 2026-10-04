import {useEffect, useState} from "react";
import type {ProductType} from "../../models/ProductsType.ts";
import {loadAuthProduct, refresh} from "../../service/services.ts";
import {Product} from "../product/Product.tsx";

export const Products = () => {
    const [products,setProducts]=useState<ProductType[]>([]);///хук для збереження та зміни компоненту, ([])-сюди записується кожен перебраний елемент.
    useEffect(()=>///хук який отримує та відображає елемент
    {loadAuthProduct().then(value =>
        setProducts(value))///якщо авторизація дійсна відображає дані.
        .catch(reason => {///якщо токен вмер зловити причину(спочатку причина помилки-не авторизований)
            console.log(reason);
            refresh()///віпрацьовує відновлення токена(відновлення авторизації)
                .then(()=>loadAuthProduct().then(value =>setProducts(value)))////наново отримуємо та виводимо продукти після відновлення авторизації
        });},[]) //пустий масив deps[], для того, щоб ефект виконався один раз(якщо в ньому буде змінна, то від її зміни)

    return (
        <div>{products.map(product=><Product {...product} key={product.id} />)}</div>
    );
};
