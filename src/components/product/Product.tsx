import type {FC} from "react";
import type {ProductType} from "../../models/ProductType.ts";

export const Product:FC<ProductType> = ({id,title,description,thumbnail}) => {
    return (
        <div><h1>{id}-{title}</h1>
        <p>{description}</p>
            <img src={thumbnail} alt={title}/>
        </div>
    );
};
