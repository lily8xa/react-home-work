import './Todos.css'
import {useEffect, useState} from "react";
import type {TodoModelType} from "../../models/TodoModel.ts";
import {loadTodos} from "../../service/api.servise.ts";
import {Todo} from "../todo/Todo.tsx";
export const Todos = () => {
    const [todos,setTodos]=useState<TodoModelType[]>([]);
    useEffect(()=>{loadTodos().then(value => setTodos(value));}
    )
    return (
        <div>
            {todos.map(todo=><Todo todo={todo} key={todo.id}/>)}
        </div>
    );
};
