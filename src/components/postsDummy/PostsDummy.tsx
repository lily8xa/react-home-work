import {useEffect, useState} from "react";
import {postDummyService} from "../../service/api.service.ts";
import type {PostDummyType} from "../../models/PostsDummy.ts";
import {PostDummy} from "../../component/postDummy/PostDummy.tsx";

export const PostsDummy = () => {
    const [posts,setPosts]=useState<PostDummyType[]>([])
    useEffect(() => {
        postDummyService.getDummyPosts()
            .then((allDummyPosts)=>{setPosts((allDummyPosts))})
    }, []);
    return (
        <div>{posts.map(post=><PostDummy key={post.id} {...post}/>)}</div>
    );
};
