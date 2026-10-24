import type {FC} from "react";
import type {PostType} from "../../models/PostType.ts";
import './Post.css'

export const Post :FC<PostType> = ({userId,id,title}) => {
    return (
        <div className={'main-post'}>
            <h1>{userId}</h1>
            <p>{id}-{title}</p>
        </div>
    );
};
