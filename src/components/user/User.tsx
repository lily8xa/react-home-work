import type {FC} from "react";
import type {UserType} from "../../models/UserType.ts";
import './User.css'

export const User:FC<UserType> = ({id,lastName,firstName,age,image}) => {
    return (
        <div className={'main-user'}>
            <h1>{id}. {lastName} {firstName} Age={age}</h1>
            <img src={image} alt={lastName}/>
        </div>
    );
};
