import {type FC, memo, useCallback, useMemo} from "react";
import type {UserType} from "../../models/UserType.ts";

export const User: FC<UserType> = memo(({id,name,email,phone}) => {
    const foo = useCallback((a: number, b: number): number => {
        return a + b;

    }, []); // Порожній масив означає, що функція створиться лише один раз при монтуванні
    console.log(foo(2, 3));

const arr:number[]=useMemo(()=>{
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
