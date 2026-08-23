import {useEffect, useState} from "react";
import type {UserType} from "../../../models/UserType.ts";
import {userService} from "../../../service/api.service.ts";
import {User} from "../../../component/user/User.tsx";

export const Users = () => {
    const[users,setUsers]=useState<UserType[]>([]);
    useEffect(()=>{
        userService.getUsers()
            .then((allUsers)=>{setUsers(allUsers);})
    },[])
    return (
        <div>{users.map((user=><User key={user.id} {...user}/>))}
        </div>
    );
};
