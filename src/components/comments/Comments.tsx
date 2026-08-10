import {useEffect,useState} from "react";
import {loadComments} from "../../servise/api.servise.ts";
import {Comment} from "../comment/Comment.tsx";
import type {RootType} from "../../models/CommentsModels.ts";
import './Comments.css'

export const Comments = () => {
    const [comments,setComment]=useState<RootType[]>([])
    useEffect(()=> {
        loadComments().then(value => setComment(value))
    },[])
    return (
        <div className={'comments-bac'}>
            {comments.map(comment=><Comment {...comment} key={comment.id}/>)}
        </div>
    );
};
