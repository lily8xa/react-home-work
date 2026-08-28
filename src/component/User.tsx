import {type FC,} from "react";
import type {UserType} from "../models/UserType.ts";
import {useNavigate} from "react-router";

type Props={
    user:UserType;
}
export const User:FC<Props> = ({user}) => {
    const navigate=useNavigate()
    const buttonOnClickToCarts=()=>{
        navigate(`/users/${user.id}/carts`)

};

    return (
        <div>
            <h3>Hello</h3>
            <div>{user.id}, {user.firstName}</div>
            <button onClick={buttonOnClickToCarts}>Click Me</button>
        </div>
    );
};
