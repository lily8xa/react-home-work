import './Todo.css'
import type {TodoModelType} from "../../models/TodoModel.ts";
import type {FC} from "react";
type PropType={todo:TodoModelType}
export const Todo:FC<PropType> = ({todo:{title,id,completed}}) => {
    return (
        <div>{id}{title}{completed.toString()}</div>
    );
};
