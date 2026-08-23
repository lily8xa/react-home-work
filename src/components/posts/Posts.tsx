import {useEffect, useState} from "react";
import type {PostType} from "../../models/PostType.ts";
import {postService} from "../../service/api.service.ts";
import {Post} from "../../component/post/Post.tsx";

export const Posts = () => {
    const[posts,setPosts]=
    useState<PostType[]>([])
    useEffect(()=>{
        postService.getPosts()
            .then((allPosts)=>{setPosts(allPosts);})
    },[])
    return (
        <div>{posts.map(post=><Post key={post.id} {...post}/>)}</div>
    );
};
