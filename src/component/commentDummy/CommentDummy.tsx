import type {FC} from "react";
import type {CommentDummyType} from "../../models/CommentsDummy.ts";
import './CommentDummy.css'

export const CommentDummy:FC<CommentDummyType> = ({id,body,postId,likes,user}) => {
    return (
        <div className={'main-dum-com'}>
            <h1>{id}</h1>
            <p>{body}</p>
            <p>{postId}</p>
            <p>Likes-{likes}</p>
            <h3>User-{user.id}. {user.fullName}, {user.username}</h3>
        </div>
    );
};
