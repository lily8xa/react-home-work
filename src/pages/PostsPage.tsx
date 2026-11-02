import {useAppSelector} from "../hooks/UseAppSelector.tsx";
import {useAppDispatch} from "../hooks/UseAppDispatch.tsx";
import {useEffect} from "react";
import {postSliceAction} from "../redux/slices/PostSlice.ts";
import {Post} from "../components/post/Post.tsx";


export const PostsPage = () => {
    //// useAppSelector---наш власний хук для типізації сховища
    const {posts}=useAppSelector(({postSlice}////////////деструкторизований стан нашого слайсу
    )=>postSlice)
    console.log(posts)
    ///ми використовуємо наш хук для типізації useAppDispatch
    const dispatch=useAppDispatch()////////////викликаємо хук, який повертає функцію відправки і записуємо в
    ///результат у dispatch
    useEffect(() => {
        dispatch(postSliceAction.loadPosts())///////dispatch шукає дані які завантажуємо з сервера які тягнуться з кімнати в слайсі
    }, []);
    return (
        <div>{posts.map(post=><Post key={post.id}{...post}/>)}</div>///перебираємо пости використовуючи компонент для виведення

    );
};
