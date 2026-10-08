import {useEffect, useState} from "react";
import {User} from "../user/User.tsx";
import type {UserType} from "../../models/UserType.ts";


export const Users = () => {
    console.log('users');

    const [users, setUsers] = useState<UserType[]>([]);////отримати користувачів і використати їх
    const [counter,setCounter]=useState<number>(0)////отримати значення(задане в стан)і змінювати його

    useEffect(() => {////доступ до масиву з користувачами
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);///доступ до данних
            });

        return () => {
            console.log('unsubscribe');
        }

    }, []);

    return (
        <div>users component
           <div>{users.map(user=><User key={user.id} id={user.id} name={user.name} email={user.email} phone={user.phone}/>)}</div>
<button onClick={() => setCounter(counter + 1)}>
    Click me {counter}</button>
        </div>
    );
};
