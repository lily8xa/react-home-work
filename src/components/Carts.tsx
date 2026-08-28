import {useParams} from "react-router";
import {useEffect, useState} from "react";
import type {CartType} from "../models/CartType.ts";
import {cartService} from "../services/api.service.ts";
import {Cart} from "../component/Cart.tsx";

export const Carts = () => {
    const{id}=useParams();
    const [carts,setCarts]=useState<CartType[]>([]);
    useEffect(() => {
        if(id){
            cartService.getAllCartsOfUsers(id)
                .then(value => {
                    setCarts(value.carts)
                })
        }
    }, [id]);
    return (
        <div>{carts.map((cart:CartType)=><Cart key={cart.id} {...cart}/>)}</div>
    );
};
