import type {FC} from "react";
import type {ProductType} from "../../models/ProductType.ts";
import './Product.css'

export const Product:FC<ProductType> = ({id,title,description,thumbnail,price}) => {
    return (
        <div className={'main-product'}><h1>{id}-{title}</h1>
            <p className={'text-amber-700'}>Prise-{price} USD</p>
        <p>{description}</p>
            <img src={thumbnail} alt={title}/>
        </div>
    );
};
