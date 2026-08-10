import type {FC} from "react";
import type {TodoType} from "../../models/TodoModels.ts";
import './Todo.css'

export const Todo:FC<TodoType>= ({id,todo,completed,userId}) => {
    return (
        <div className={'todo-text'}>
            <h1>{todo}</h1>
            <p>{id} {userId}</p>
            <h3>{completed.toString()}</h3>
        </div>
    );
};
