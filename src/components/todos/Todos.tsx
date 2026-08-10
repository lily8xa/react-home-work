import {useEffect, useState} from "react";
import type {TodoType} from "../../models/TodoModels.ts";
import {loadTodos} from "../../servise/api.servise.ts";
import {Todo} from "../todo/Todo.tsx";
import './Todos.css'



export const Todos = () => {
    const [todos,setTodos]=useState<TodoType[]>([]);
    useEffect(()=>{loadTodos().then(value=>setTodos(value))},[])
    return (
        <div className={'todos-bac'}>
            {todos.map(todo=><Todo {...todo} key={todo.id}/>)}
        </div>
    );
};
