import type {FC} from "react";
import type {UserType} from "../../models/UserType.ts";
import './User.css'

export const User:FC<UserType> = ({id,firstName,lastName,image,address}) => {
    return (
        <div className={'main-user'}>
            <h1>{id}. {firstName} {lastName}</h1>
            <img src={image} alt="image"/>
            <ul>Address
            <li>
                {address.city}
            </li></ul>
        </div>
    );
};
