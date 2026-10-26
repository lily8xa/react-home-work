import {useAppDispatch} from "../hooks/UseAppDispatch.tsx";
import {useAppSelector} from "../hooks/UseAppSelector.tsx";
import {useEffect} from "react";
import {userSliceAction} from "../redux/slices/UserSlice.ts";
import {commentSliceActions} from "../redux/slices/CommentSllise.ts";
import {postSliceAction} from "../redux/slices/PostSlice.ts";
import {User} from "../components/user/User.tsx";
import {Post} from "../components/post/Post.tsx";
import {Comment} from "../components/comment/Comment.tsx";

export const ComplexPage = () => {
    const dispatch=useAppDispatch()
    //////через наш хук useAppSelector доступаємось до сховища і таким чином(state => state) беремо його дані
    const { users } = useAppSelector(state => state.userSlice);
    const { posts } = useAppSelector(state => state.postSlice);
    const { comments } = useAppSelector(state => state.commentSlice);

    useEffect(() => {
        if(!users.length){////якщо нема завантажень у сховищі
            dispatch(userSliceAction.loadUsers())///////////завантажуємо наново
        }
        if(!posts.length){
            dispatch(postSliceAction.loadPosts())
        }
        if (!comments.length){
            dispatch(commentSliceActions.loadComments())
        }
    }, []);
    return (///////////відображаємо користувачів, пости і коментарі
        <div>
            <div>{users.map(user=><User key={user.id}{...user}/>)}</div>
            <div>{posts.map(post=><Post key={post.id}{...post} />)}</div>
            <div>{comments.map(comment=><Comment key={comment.id}{...comment}/>)}</div>
        </div>
    );
};
