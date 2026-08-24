import type {FC} from "react";
import type {PostType} from "../../models/PostType.ts";
import './Post.css'

export const Post:FC<PostType>= ({userId,id,title,body}) => {
    return (
        <div className={'main-post'}>
            <h1>{userId}-{id}. {title}</h1>
            <p>{body}</p>
        </div>
    );
};
