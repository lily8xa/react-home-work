import type {FC} from "react";
import type {CartType} from "../models/CartType.ts";

export const Cart:FC<CartType> = ({id,userId,products}) => {
    return (
        <div>
            <h1>{id} User:{userId} </h1>
            <ul>{products.map((product,index)=>(
                <li key={index}>{product.title}. Prise{product.price} <img src={product.thumbnail} alt="image"/></li>
                ))}
            </ul>
        </div>
    );
};
