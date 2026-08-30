import {useEffect, useState} from "react";
import type {CartType} from "../../models/CartType.ts";
import {cartService} from "../../services/CartService.ts";
import {useParams} from "react-router";
import {Cart} from "../../component/cart/Cart.tsx";

export const Carts = () => {
    const{id}=useParams();

    const[carts,setCarts]=useState<CartType[]>([]);
    useEffect(() => {
        if(id){
            cartService.getAllCartsOfUsers(id)
                .then(value => setCarts(value))
            }}, [id]);

    return (
        <div>{carts.map(cart=><Cart key={cart.id} {...cart}/>)
        }</div>
    );
};
