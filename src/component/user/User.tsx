import {type FC,} from "react";
import type {UserType} from "../../models/UserType.ts";
import {useNavigate} from "react-router";
import './User.css'

type Props={
    user:UserType;
}
export const User:FC<Props> = ({user}) => {
    const navigate=useNavigate()
    const buttonOnClickToCarts=()=>{
        navigate(`/users/${user.id}/carts`)

};

    return (
        <div className={'main-user'}>
            <h3>Hello</h3>
            <div>{user.id}, {user.firstName}</div>
            <button className={'px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-full shadow-sm transition duration-200'} onClick={buttonOnClickToCarts}>Click Me</button>
        </div>
    );
};
