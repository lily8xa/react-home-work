import {useEffect, useState} from "react";
import type {UserType} from "../../models/UserType.ts";
import {getAll} from "../../service/api.service.ts";
import type {BaseType} from "../../models/BaseType.ts";
import {User} from "../../component/user/User.tsx";

export const Users = () => {
    const[users,setUsers]=useState<UserType[]>([])
    useEffect(() => {
        getAll<BaseType & {users:UserType[]}>('/users')
            .then(value=> setUsers(value.users))
    }, []);
    return (
        <div>{users.map((user=><User key={user.id}{...user}/>))}</div>
    );
};
