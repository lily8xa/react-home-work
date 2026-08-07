import {useEffect, useState} from "react";
import type {ModelCommentType} from "../../models/ModelCommen.ts";
import {loadPosts} from "../../servise/api.servise.ts";
import {Comment} from "../comment/Comment.tsx";
import './Comments.css'

export const Comments = () => {
    const [comments,setComments]=useState<ModelCommentType[]>([])
    useEffect(()=>{
        loadPosts().then(value => setComments(value))

    },[])
    return (
        <div className={'background'}>{
            comments.map(comment=><Comment comment={comment} key={comment.id}/>)
        }</div>
    );
};
