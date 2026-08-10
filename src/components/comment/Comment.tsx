import type {FC} from "react";
import type {RootType} from "../../models/CommentsModels.ts";
import './Comment.css'


export const Comment:FC<RootType> = ({ id, body, postId, likes, user }) => {
    return (
        <div>
            <div className={'comment-text'}>
                <p>{id}{postId}</p>
                <p>{body}</p>
                <h3>{likes}</h3>
                <div>
                    <p className={'point'}>{user.username}</p>
                    <p className={'point'}>{user.username}</p>
                </div>
            </div>
        </div>
    );
};
