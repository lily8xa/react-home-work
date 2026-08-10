import {type FC} from "react";
import type {PostType} from "../../models/PostsModels.ts";
import './Post.css'


export const Post:FC<PostType>= ({id,title,body,tags,reactions,views,userId}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{id} {userId} {views}</p>
            <h3>{body}</h3>
            <ul className={'tag'}>{tags.map((tag, index) => (
                <li key={index}>#{tag}</li>
            ))}</ul>
            <p className={'dis-like'}>{reactions.dislikes}</p>
            <p className={'like'}>{reactions.likes}</p>

        </div>
    );
};
