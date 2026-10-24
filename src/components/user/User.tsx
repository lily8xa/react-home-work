import type {FC} from "react";
import type {UserType} from "../../models/UserType.ts";
import './User.css'

export const User:FC<UserType> = ({id, name, phone}) => {

    return (
        <div className={'main-user'}>
            <h1>{id}-{name}</h1>
            <p>Phone-{phone}</p>
        </div>
    );
};
