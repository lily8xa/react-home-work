import {useEffect, useState} from "react";
import type {UserType} from "../models/UserType.ts";
import {userService} from "../services/api.service.ts";
import {User} from "../component/User.tsx";

export const Users = () => {
    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(() => {
        userService.getAllUsers()
            .then(value => {
                setUsers(value.users)
            });

    }, []);
    return (
        <div>
            <div>{users.map(user=><User key={user.id} user={user}/>)}</div>
            <p>My user</p>
        </div>
    );
};

