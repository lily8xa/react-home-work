import type {FC} from "react";
import type {CommentType} from "../../models/CommentType.ts";
import './Comment.css'

////componet з відображеням кожного коментаря.
export const Comment:FC<CommentType> = ({id, name, body}) => {/////тип коментаря і пропси для вивелення
    return (
        <div className={'main-comment'}>Comment
            <h1>{id}--{name}</h1>
            <p>{body}</p>
        </div>
    );
};
