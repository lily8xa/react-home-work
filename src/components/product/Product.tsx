import type {FC} from "react";
import type {ProductType} from "../../models/ProductsType.ts";

export const Product:FC<ProductType> = ({id,title,price,thumbnail}) => {
    return (
        <div>
            <p>{id}</p>
            <h1>{title}-{price} USD</h1>
            <img src={thumbnail} alt={title}/>
        </div>
    );
};
