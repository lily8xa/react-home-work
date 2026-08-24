import type {FC} from "react";
import type {PostDummyType} from "../../models/PostsDummy.ts";
import './PostDummy.css'

export const PostDummy:FC<PostDummyType> = ({id,title,body,tags,reactions,views,userId}) => {
    return (
        <div className={'main-post-dum'}>
            <h1>{id}, {title}</h1>
            <p>{body}</p>
            <ul>{tags.map(((tag,index)=><li key={index}>#{tag}</li>))}</ul>
            <p>Reactions: Likes-{reactions.likes}. Dislikes-{reactions.dislikes}</p>
            <p>Views{views}</p>
            <p>{userId}</p>
        </div>
    );
};
