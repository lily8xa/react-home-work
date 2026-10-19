import {useAppSelector} from "../hooks/UseAppSelector.tsx";
import {useEffect} from "react";
import {userSliceAction} from "../redux/slices/UserSlice.ts";
import {useAppDispatch} from "../hooks/UseAppDispatch.tsx";
import {User} from "../components/user/User.tsx";

export const UsersPage = () => {
    ///{users}---деструктуруємо на об'єкт, useAppSelector---наш власний хук для типізації сховища
    const {users}=useAppSelector(({userSlice})=>userSlice)
    ///////useDispatch()---хук який викликає інші функції і повертає обєкт
    ///ми використовуємо наш хук для типізації
    console.log(users)
    const dispatch=useAppDispatch()
    useEffect(() => {
        dispatch(userSliceAction.loadUsers())
    }, []);
    return (
        <>{users.map(user => <User key={user.id} {...user} />)}</>

    );
};
