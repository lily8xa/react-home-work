import {useEffect, useState} from "react";
import type {UserType} from "../../models/UserType.ts";
import {UserService} from "../../services/UserService.ts";
import {User} from "../../component/user/User.tsx";

export const Users = () => {
    const [users,setUsers]=useState<UserType[]>([]);
    useEffect(() => {
        UserService.getAllUsers()
            .then(value => setUsers(value.users))
    }, []);
    return (
        <div>{users.map(user=><User key={user.id} {...user}/>)}</div>
    );
};
