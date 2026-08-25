import type {FC} from "react";
import type {PostType} from "../../models/PostType.ts";

export const Post:FC<PostType> = ({id,title,body,tags}) => {
    return (
        <div>
            <h1>{id} {title}</h1>
            <p>{body}</p>
            <ul>{tags.map((tag,index)=>(<li key={index}>#{tag}</li>))}
            </ul>
        </div>
    );
};
