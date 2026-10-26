import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {UserType} from "../../models/UserType.ts";
import {getAll} from "../../services/api.servise.ts";
type UserSliceType={/////////////////тип для дефолтного значення з масивом користувачів
    users:UserType[];
}
const initialUserSliceState:UserSliceType={users:[]}///////////////зазаємо дефолтне значення з типом нашим і пустий масив, якщо не завантажено нічого
//////////функція завантаження данних з хуком createAsyncThunk який обробляє успішне і не успішне завантаження, також підтримує аргумент який можна викорстовуваити для отримання певних данни(_)
export const loadUsers = createAsyncThunk<UserType[]>(
'userSlice,loadUsers',
    async (_,thuncAPI)=>{/////////(_)-аргумент який дає можливість відслідковувати(прик.id:string) і керувати. thuncAPI----------містична штука бо так треба
    try{
        const users=await getAll<UserType[]>('/users');////////////використовуємо функцію для торимання данних з АПІ
        console.log(users)

        return thuncAPI.fulfillWithValue(users);///////////повертаємо успішно виконаний масив юзерів. fulfillWithValue-метод що передає успішні дані

    }catch (error){//////////////якщо щось пішло не так
        console.log(error);
        return thuncAPI.rejectWithValue('some error')
    }
    }
)
////створюємо кімнату зі слайсами---createSlice
export const userSlice= createSlice({//////треба її прописати в Store
    name:'userSlice',/////довільна назва для пошуку
    initialState:initialUserSliceState,/////початковий стан нашого обєкту
    reducers:{},////метод який впливає на початковий стан-state.  і може його змінювати---action(для синхронних операцій)
    extraReducers://///reducers для асинхронних операцій
           (builder) => builder////реєструємо випадок
                /////.addCase---нове завдання.loadUsers---функція з посиланням.fulfilled---реалізація відповіді успіх
                ////state---берем стан,action---вкладаємо відповідь суди з масивом
        .addCase(loadUsers.fulfilled,(state,action:PayloadAction<UserType[]>)=>{
            ////state.users---наша відповідь.action.payload---корисне навантаження яке передається в сховище
            state.users=action.payload
        })////////////////////.rejected ---у випадку помилки завантаження
                .addCase(loadUsers.rejected,(state,action)=>{
                    console.log(state,action)
                })

})
export const userSliceAction={/////його використовуємо у файлах
    ...userSlice.actions,loadUsers
}
////...userSlice---на основі цієї кімнати та її .actions----дії
