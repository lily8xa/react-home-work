import type {FC} from "react";
import type {CartType} from "../../models/CartType.ts";
import './Cart.css'

export const Cart:FC<CartType> = ({id,userId,products,totalProducts,total,discountedTotal}) => {

    return (
        <div className={'main-cart'}>
            <h1>{id}. User-{userId} Items in cart {totalProducts}, in the amount of-{total} USA, Discount-{discountedTotal} USA</h1>
            <ul>Products:{products.map((product,index)=>(<li  className={'one-cart'} key={index}>{product.title}.
                {product.price} USD, <img src={product.thumbnail} alt='picture'/></li>))}</ul>
        </div>
    );
};
