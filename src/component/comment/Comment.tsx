import type {FC} from "react";
import type {CommentType} from "../../models/CommentType.ts";
import './Comment.css'
export const Comment:FC<CommentType> = ({postId,id,name,email,body}) => {
    return (
        <div className={'main-com'}>
            <h1 className={'text-amber-700'}>{postId}-{id}. {name}</h1>
            <p>{body}</p>
            <p>Email-{email}</p>
        </div>
    );
};
