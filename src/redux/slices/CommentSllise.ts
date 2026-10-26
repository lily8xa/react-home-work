import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {CommentType} from "../../models/CommentType.ts";
import {getAll} from "../../services/api.servise.ts";
////////////////////////////////
////////////////////////////////////детальний аналогічний опис в файлі UserSlice.ts///////////////////////////
//////////////////////////////////////////////////////////////////////////////
type CommentSliceType={
    comments:CommentType[]
}
const loadComments=createAsyncThunk<CommentType[]>(
    'commentSlice/loadComments',
    async (_,thuncApi)=>{
        try {
            const comments=await getAll<CommentType[]>('/comments')
            console.log(comments)
            return thuncApi.fulfillWithValue(comments)

        }catch (e){
            console.log(e)
            return thuncApi.rejectWithValue('Not Load Comments')
        }
    }

)
const initialState:CommentSliceType={comments:[]}
export const commentSlice=createSlice({
    name:'commentSlice',
    initialState:initialState,
    reducers:{},
    extraReducers:builder => builder
        .addCase(loadComments.fulfilled,(state,action:PayloadAction<CommentType[]>)=>{
            state.comments=action.payload
})
        .addCase(loadComments.rejected,(state, action)=>{
            console.log({state, action})
        })
})
export const commentSliceActions={
    ...commentSlice.actions,loadComments
}
