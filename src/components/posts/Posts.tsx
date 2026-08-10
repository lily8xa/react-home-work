import {useEffect, useState} from "react";
import type {PostType} from "../../models/PostsModels.ts";
import {loadPosts} from "../../servise/api.servise.ts";
import './Posts.css'
import {Post} from "../post/Post.tsx";
export const Posts = () => {
    const [posts,setPosts]=useState<PostType[]>([])
    useEffect(()=>{loadPosts().then(value => setPosts(value))},[])
    return (
        <div className={'point-tag'}>
            {posts.map(post=><Post {...post} key={post.id}/>)}
        </div>
    );
};
