import type {FC} from "react";
import type {UserType} from "../../models/UserType.ts";
import { Link } from "react-router";
import './User.css'

export const User:FC<UserType> = ({id,username,firstName,lastName,maidenName,image}) => {
    return (
        <div className={'main-user'}>
            <h1>{id}-{username}</h1>
            <img src={image} alt="Photo"/>
            <Link to={`/user/${id}/carts`}>{firstName} {lastName} {maidenName}</Link>
        </div>
    );
};
