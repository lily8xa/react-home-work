import type {FC} from "react";
import type {UserType} from "../../models/UserType.ts";
import './User.css'

export const User:FC<UserType> = ({id, name, phone}) => {
///////////для відображення кожного юзера
    /////прописи {id, name, phone} які беруться з <UserType> для рендеру на сторінку користувача
    return (
        <div className={'main-user'}>
            <h1>{id}-{name}</h1>
            <p>Phone-{phone}</p>
        </div>
    );
};
