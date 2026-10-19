import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {UserType} from "../../models/UserType.ts";
import {getAll} from "../../services/api.servise.ts";
type UserSliceType={
    users:UserType[];
}
const initialUserSliceState:UserSliceType={users:[]}
export const loadUsers = createAsyncThunk<UserType[]>(
'userSlice,loadUsers',
    async (_,thuncAPI)=>{
    try{
        const users=await getAll<UserType[]>('/users');
        console.log(users)

        return users;

    }catch (error){
        console.log(error);
        return thuncAPI.rejectWithValue('some error')
    }
    }
)
////створюємо кімнату зі слайсами---createSlice
export const userSlice= createSlice({
    name:'userSlice',/////довільна назва для пошуку
    initialState:initialUserSliceState,/////початковий стан нашого обєкту
    reducers:{},////метод який впливає на початковий стан-state.  і може його змінювати---action(для синхронних операцій)
    extraReducers://///reducers для асинхронних операцій
           (builder) => builder////реєструємо випадок
                /////.addCase---нове завдання.loadUsers---функція з посиланням.fulfilled---реалізація відповіді успіх
                ////state---берем стан,action---вкладаємо відповідь суди з масивом
        .addCase(loadUsers.fulfilled.type,(state,action:PayloadAction<UserType[]>)=>{
            ////state.users---наша відповідь.action.payload---корисне навантаження яке передається в сховище
            state.users=action.payload
        })////////////////////.rejected ---у випадку помилки завантаження
                .addCase(loadUsers.rejected,(state,action)=>{
                    console.log(state,action)
                })

})
export const userSliceAction={
    ...userSlice.actions,loadUsers
}
////...userSlice---на основі цієї кімнати та її .actions----дії
