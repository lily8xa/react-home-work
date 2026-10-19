import type {PostType} from "../../models/PostType.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.servise.ts";

type PostSliceType={
    posts:PostType[]
}
const initialPostSliceState:PostSliceType={posts:[]};
export const loadPosts=createAsyncThunk<PostType[]>(
    'postSlice,loadPosts',
async(_,thuncAPI)=>{
try{
    const posts=await getAll<PostType[]>('/posts')
    console.log(posts)
    return posts;
}catch (error){
    console.log(error);
    return thuncAPI.rejectWithValue('some error')
}
}
)
export const postSlice=createSlice({
    name:'postSlice',
    initialState:initialPostSliceState,
    reducers:{},
    extraReducers:builder => builder
        .addCase(loadPosts.fulfilled,(state,action:PayloadAction<PostType[]>)=>{
            state.posts=action.payload
        })
        .addCase(loadPosts.rejected,(state,action)=>{
console.log(state,action)
})
    })
export const postSliceAction={
    ...postSlice.actions,loadPosts
}
