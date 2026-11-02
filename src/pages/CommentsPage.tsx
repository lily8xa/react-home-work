import {useAppSelector} from "../hooks/UseAppSelector.tsx";
import {useAppDispatch} from "../hooks/UseAppDispatch.tsx";
import {useEffect} from "react";
import {commentSliceActions} from "../redux/slices/CommentSllise.ts";
import {Comment} from "../components/comment/Comment.tsx";

export const CommentsPage = () => {
    ///{users}---деструктуруємо на об'єкт, useAppSelector---наш власний хук для типізації сховища
    const{comments}=useAppSelector(({commentSlice}////////////деструкторизований стан нашого слайсу
    )=>commentSlice);////частинка з данними {comments}
    ///ми використовуємо наш кастомний хук для типізації useAppDispatch
    const dispatch=useAppDispatch()////////////викликаємо хук, який повертає функцію відправки і записуємо в
    ///результат у dispatch
    useEffect(() => {
        dispatch(commentSliceActions.loadComments())///////dispatch шукає дані які завантажуємо з сервера які тягнуться з кімнати в слайсі
    }, []);///////////////([])---масив для відслідковування залежностей
    return (//////////////перебираємо коментарі використовуючи компонент для виведення

        <div>{comments.map(comment=><Comment key={comment.id} {...comment}/>)}</div>
    );
};
