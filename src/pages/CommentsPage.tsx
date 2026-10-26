import {useAppSelector} from "../hooks/UseAppSelector.tsx";
import {useAppDispatch} from "../hooks/UseAppDispatch.tsx";
import {useEffect} from "react";
import {commentSliceActions} from "../redux/slices/CommentSllise.ts";
import {Comment} from "../components/comment/Comment.tsx";
///////////////////////////
///////////////////////детальний опис на сторінці UsersPage ідентична цій//////////////////////////
///////////////////////////
export const CommentsPage = () => {
    const{comments}=useAppSelector(({commentSlice})=>commentSlice);
    const dispatch=useAppDispatch()
    useEffect(() => {
        dispatch(commentSliceActions.loadComments())
    }, []);
    return (
        <div>{comments.map(comment=><Comment key={comment.id} {...comment}/>)}</div>
    );
};
