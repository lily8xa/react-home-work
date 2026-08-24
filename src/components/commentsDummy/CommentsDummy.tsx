import {useEffect, useState} from "react";
import type {CommentDummyType} from "../../models/CommentsDummy.ts";
import {commentDummyService} from "../../service/api.service.ts";
import {CommentDummy} from "../../component/commentDummy/CommentDummy.tsx";

export const CommentsDummy = () => {
    const[comments,setComments]=useState<CommentDummyType[]>([])
    useEffect(() => {
        commentDummyService.getDummyComments()
            .then((allDummyComments)=>{setComments(allDummyComments)})
    }, []);
    return (
        <div>{comments.map((comment=><CommentDummy key={comment.id} {...comment}/>))}</div>
    );
};
