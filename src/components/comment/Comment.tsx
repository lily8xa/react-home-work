import type {ModelCommentType} from "../../models/ModelCommen.ts";
import type {FC} from "react";
import './Comment.css'
type CommentType={comment:ModelCommentType}
export const Comment:FC<CommentType> = ({comment: {name,postId,id,body,email}}) => {
    return (
        <div>
            <h3 className={'id-text'}>{id}</h3>
            <h1 className={'-bg-conic-210'}>{name}</h1>
            <p className={'-bg-conic-210'}>{postId}</p>
            <p className={'body-text'}>{body}</p>
            <p className={'text-amber-700'}>{email}</p>
        </div>
    );
};
