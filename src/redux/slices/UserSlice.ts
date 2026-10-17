import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {UserType} from "../../models/UserType.ts";
import {getAll} from "../../services/api.servise.ts";
type UserSliceType={
    users:UserType[];
}
const initialUserSliceState:UserSliceType={users:[]}
const loadUsers=createAsyncThunk(
'userSlice,loadUsers',
    async (_,thuncAPI)=>{
    try{const users=await getAll<UserType[]>('/users');
        console.log(users)
        return thuncAPI.fulfillWithValue(users);

    }catch (error){
        console.log(error);
        return thuncAPI.rejectWithValue('some error')
    }
    }
)
export const userSlice= createSlice({
    name:'userSlice',
    initialState:initialUserSliceState,
    reducers:{},
    extraReducers: builder => builder
        .addCase(loadUsers.fulfilled,(state,action:PayloadAction<UserType[]>)=>{
            state.users=action.payload
        })

})
export const userSliceAction={
    ...userSlice.actions,loadUsers
}
