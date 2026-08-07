import './Posts.css'
import {useEffect, useState} from "react";
import type {RootPostType} from "../../models/postModels.ts";
import {loadPosts} from "../../servise/api.sevise.ts";
import {Post} from "../post/Post.tsx";


export const Posts = () => {
    const [posts,setPosts]=useState<RootPostType[]>([])
    useEffect(()=> {
        loadPosts().then(value => setPosts(value))
    },[])
    return (
        <div className='backdrop-brightness-90'>
            <div className={'text'}>
            {posts.map(post=><Post post={post} key={post.id}/>)}
            </div>
        </div>
    );
};
