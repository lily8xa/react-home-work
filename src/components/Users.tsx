import {useCallback, useEffect, useState} from "react";
import {User} from "./User.tsx";


export const Users = () => {
    console.log('users');

    const [users, setUsers] = useState([]);


    const foo = useCallback(() => {
        console.log('test');
    }, [])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });

        return () => {
            console.log('unsubscribe');
        }

    }, []);

    return (
        <div>users component
            <User foo={foo} {...users}/>

        </div>
    );
};
