import {useAppSelector} from "../hooks/UseAppSelector.tsx";
import {useAppDispatch} from "../hooks/UseAppDispatch.tsx";
import {useEffect} from "react";
import {postSliceAction} from "../redux/slices/PostSlice.ts";
import {Post} from "../components/post/Post.tsx";

///////////////////////////
///////////////////////детальний опис на сторінці UsersPage ідентична цій//////////////////////////
///////////////////////////

export const PostsPage = () => {
    const {posts}=useAppSelector(({postSlice})=>postSlice)
    console.log(posts)
    const dispatch=useAppDispatch()
    useEffect(() => {
        dispatch(postSliceAction.loadPosts())
    }, []);
    return (
        <div>{posts.map(post=><Post key={post.id}{...post}/>)}</div>
    );
};
