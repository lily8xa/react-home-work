import {useEffect, useState} from "react";
import type {ProductType} from "../../models/ProductType.ts";
import {useSearchParams} from "react-router";
import {getProducts} from "../../services/api.service.ts";
import {Product} from "../product/Product.tsx";
import {Pagination} from "../../pagination/Pagination.tsx";

export const Products = () => {
    const [products,setProducts]=useState<ProductType[]>([]);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [query]=useSearchParams();
    const limit = 5;
    useEffect(() => {
        getProducts(query.get('page') || '1')
            .then(value => {
                setProducts(value.products);
                setTotalItems(value.total);
            })
    }, [query]);
    return (
        <div><div>
            <Pagination total={totalItems} limit={limit} />
        </div>
            {products.map(product=><Product key={product.id} {...product}/>)}

        </div>
    );
};
