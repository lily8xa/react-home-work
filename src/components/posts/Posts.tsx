import {useEffect, useState} from "react";
import type {PostType} from "../../models/PostType.ts";
import {getAll} from "../../service/api.service.ts";
import type {BaseType} from "../../models/BaseType.ts";
import {Post} from "../../component/post/Post.tsx";

export const Posts = () => {
    const[posts,setPosts]=useState<PostType[]>([])
    useEffect(() => {
        getAll<BaseType & {posts:PostType[]}>('/posts')
            .then(value => setPosts(value.posts))
    }, []);
    return (
        <div>{posts.map((post=><Post key={post.id}{...post}/>))}</div>
    );
};
