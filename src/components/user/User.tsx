import {type FC, memo, useCallback, useMemo} from "react";
import type {UserType} from "../../models/UserType.ts";
////useState після обробки і виведення setUsers перезапускає увесь батьківський компонент повторно,
// щоб не перерендрювався дочірній компонент потрібно застосувати метод зберігання МЕМО.
export const User: FC<UserType> = memo(({id,name,email,phone}) => {
    ///якщо в компоненті є функція то мемо буде ігноруватися, через те що функція дає сигнал зміни,
    // щоб вона не бралась до уваги на неї кладемо хук UseCallback з
    // пустим масивом залежності, щоб відпрацьовувала 1 раз.
    const foo = useCallback((a: number, b: number): number => {
        return a + b;

    }, []); // Порожній масив означає, що функція створиться лише один раз при монтуванні
    console.log(foo(2, 3));

const arr:number[]=useMemo(()=>{////також доданий масив буде перезапускати цілий елемент
    //тому ставиться хук useMemo, також з масивом залежності.
    return[12,12,4]
},[])
console.log(arr)
    console.log({name});
    return (
        <div>
            <ul>{arr.map((arr,index)=>(<li key={index}> {arr}</li>))}</ul>
            <h1>{id}-{name}</h1>
            <p>Email-{email}</p>
            <p>Phone-{phone}</p>
        </div>
    );
});
