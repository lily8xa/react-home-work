import {useAppSelector} from "../hooks/UseAppSelector.tsx";
import {useEffect} from "react";
import {userSliceAction} from "../redux/slices/UserSlice.ts";
import {useAppDispatch} from "../hooks/UseAppDispatch.tsx";
import {User} from "../components/user/User.tsx";

export const UsersPage = () => {
    ///{users}---деструктуруємо на об'єкт, useAppSelector---наш власний хук для типізації сховища
    const {users}=useAppSelector(({userSlice}////////////деструкторизований стан нашого слайсу
    )=>userSlice)/////частинка з данними {users}=
    ///ми використовуємо наш хук для типізації useAppDispatch
    const dispatch=useAppDispatch()////////////викликаємо хук, який повертає функцію відправки і записуємо в
    ///результат у dispatch
    useEffect(() => {
        dispatch(userSliceAction.loadUsers())///////dispatch шукає дані які завантажуємо з сервера які тягнуться з кімнати в слайсі
    }, []);
    return (
        <>{users.map(user => <User key={user.id} {...user} />)}</>/////перебираємо користувачів використовуючи компонент для виведення

    );
};
