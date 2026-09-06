import {useEffect, useState} from "react";
import type {UserType} from "../../models/UserType.ts";
import {useSearchParams} from "react-router";
import {getUsers} from "../../services/api.service.ts";

export const Users = () => {
    const [users,setUsers]=useState<UserType[]>([]);
    const [searchParam]=useSearchParams();
    useEffect(()=>{
        getUsers(searchParam.get('page') ||'1')
            .then(value => setUsers(value.users))
    },[searchParam])
    return (
        <></>
    );
};
