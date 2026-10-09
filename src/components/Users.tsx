import {useFetch} from "../hooks/Fetch.tsx";
import type {UserType} from "../models/UserType.ts";
import {User} from "./User.tsx";

export const Users =()=>{
    const users=useFetch<UserType[]>('https://jsonplaceholder.typicode.com/users',[])///пустий масив для дефолтного значення
    return (
        <>{users.map((user)=><User key={user.id} {...user} />)}</>
    );
};
