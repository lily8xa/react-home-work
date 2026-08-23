import {useEffect, useState} from "react";
import {commentService} from "../../service/api.service.ts";
import type {CommentType} from "../../models/CommentType.ts";
import {Comment} from "../../component/comment/Comment.tsx";

export const Comments = () => {
    const[comments,setComments]=
    useState<CommentType[]>([])
    useEffect(() => {
        commentService.getComments()
            .then((allComments)=>{setComments(allComments);})
    }, []);
    return (
        <div>{comments.map(comment=><Comment key={comment.id} {...comment}/>)}</div>
    );
};
