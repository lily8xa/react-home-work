import type {FC} from "react";
import type {RootPostType} from "../../models/postModels.ts";
 type PostType={post:RootPostType}
import'./Post.css'

export const Post:FC<PostType> = ({post:{title,body,userId,id}}) => {
    return (
        <div className={'main-text'}>
            <h3 className={'id-text'}>{id}</h3>
            <h1>{title}</h1>
            <p className={'bodi-size'}>{body}</p>
            <p>{userId}</p>
        </div>
    );
};
