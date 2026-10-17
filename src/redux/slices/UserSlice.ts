import {createSlice} from "@reduxjs/toolkit";
type UserSlyceType={
    usrs:UserType[];
}
const initialState={users:[]}
export const userSlice = createSlice({
    name:'userSlice',
    initialState:initialState,

})
