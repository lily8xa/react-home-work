import type {FC} from "react";
import type {PostType} from "../../models/PostType.ts";

export const Post:FC<PostType>= ({userId,id,title,body}) => {
    return (
        <div>
            <h1>{userId}-{id}. {title}</h1>
            <p>{body}</p>
        </div>
    );
};
