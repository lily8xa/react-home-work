import {useAppSelector} from "../hooks/UseAppSelector.tsx";
import {useEffect} from "react";
import {userSliceAction} from "../redux/slices/UserSlice.ts";
import type {UserType} from "../models/UserType.ts";
import {useAppDispatch} from "../hooks/UseAppDispatch.tsx";

export const UsersPage = () => {
    ///{users}---деструктуруємо на об'єкт, useAppSelector---наш власний хук для типізації сховища
    const {users}=useAppSelector(({userSlice})=>userSlice)
    ///////useDispatch()---хук який викликає інші функції і повертає обєкт
    ///ми використовуємо наш хук для типізації

    const dispatch=useAppDispatch()
    useEffect(() => {
        dispatch(userSliceAction.loadUsers())
    }, []);
    console.log('users');
    return (
        <>{users.map((user: UserType) => (<div key={user.id}> {user.name}</div>))}</>

    );
};
