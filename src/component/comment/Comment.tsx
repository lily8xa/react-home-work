import type {FC} from "react";
import type {CommentType} from "../../models/CommentType.ts";

export const Comment:FC<CommentType> = ({postId,id,name,email,body}) => {
    return (
        <div>
            <h1>{postId}-{id}. {name}</h1>
            <p>{body}</p>
            <p>Email-{email}</p>
        </div>
    );
};
