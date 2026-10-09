import {useEffect, useState} from "react";

////<T, >- потрібно класти кому і пробіл, щоб застосовувалась типізація в стрілочній функції.
///defaultValue:T--вказуємо щою такий обєкт існував, щоб не робити перевірку на null
export const useFetch = <T, >(url:string,defaultValue:T)=>{
    const [obj,setObj]=useState<T>(defaultValue);////стан для потрібного об'єкту
    useEffect(() => {
        fetch(url)/////посилання з аргументу
            .then(res => res.json())////відповідь
            .then((res)=>{setObj(res)})////використання відповіді
    }, []);
    return obj;/////і в другий бік
}
