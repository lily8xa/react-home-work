import type {FC} from "react";
import type {ProductType} from "../../models/ProductsType.ts";
import './Product.css'

export const Product:FC<ProductType> = ({id,title,price,thumbnail}) => ////відображення продуктів DOM
{
    return (
        <div className={'main-product'}>
            <p>{id}</p>
            <h1>{title}-{price} USD</h1>
            <img src={thumbnail} alt={title}/>
        </div>
    );
};
