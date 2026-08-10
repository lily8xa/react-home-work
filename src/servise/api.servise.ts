import type {CommentType, RootType} from "../models/CommentsModels.ts";
import type {JsonTodoType, TodoType} from "../models/TodoModels.ts";
import type {JsonPostType, PostType} from "../models/PostsModels.ts";


const endpointComments=import.meta.env.VITE_API_BASE_URL +'/comments'
const endpointTodos=import.meta.env.VITE_API_BASE_URL +'/todos'
const endpointPosts=import.meta.env.VITE_API_BASE_URL +'/posts'
export const loadComments=async():Promise<RootType[]>=>{
    const response: CommentType=await fetch(endpointComments)
        .then(value => value.json())
    return response.comments;
}
export const loadTodos=async ():Promise<TodoType[]>=>{
    const  responseTodo:JsonTodoType=await fetch(endpointTodos)
        .then(value => value.json())
    return responseTodo.todos
}
export const loadPosts=async ():Promise<PostType[]>=>{
    const responsePosts:JsonPostType=await fetch(endpointPosts)
        .then( value => value.json())
    return responsePosts.posts

}
