import {useEffect, useState} from "react";
import type {UserDummyType} from "../../models/UsersDummy.ts";
import {userDummyService} from "../../service/api.service.ts";
import {UserDummy} from "../../component/userDummy/UserDummy.tsx";

export const UsersDummy = () => {
    const[users,setUsers]=useState<UserDummyType[]>([])
    useEffect(() => {
        userDummyService.getDummyUsers()
            .then((allDummyUsers)=>{setUsers((allDummyUsers))})
    }, []);
    return (
        <div>{users.map((user=><UserDummy key={user.id} {...user}/>))}</div>
    );
};

