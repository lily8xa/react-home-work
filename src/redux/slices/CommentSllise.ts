import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {CommentType} from "../../models/CommentType.ts";
import {getAll} from "../../services/api.servise.ts";

type CommentSliceType={//тип для дефолтного значення з
    comments:CommentType[]////масив з коментарями
}
//////////функція завантаження даних createAsyncThunk який обробляє успішне і не успішне завантаження, також підтримує аргумент який можна використовувати для отримання певних даних(_)
const loadComments=createAsyncThunk<CommentType[]>(
    'commentSlice/loadComments',//Це унікальне ім'я екшену, префікс
    async (_,thuncApi)=>{ ////////(_)-аргумент який дає можливість відслідковувати(прик.id:string) і керувати. thuncAPI--•об'єкт, який надає доступ до корисних інструментів Redux всередині танка. Завдяки йому ми можемо вручну керувати результатом запиту, викликати інші екшени (thunkAPI.dispatch) або почитати поточний стан сховища (thunkAPI.getState()).
        try {
            const comments=await getAll<CommentType[]>('/comments')//////////використовуємо функцію для отримання даних з АПІ,
            ////почекаємо поки відпрацює await
            console.log(comments)
            return thuncApi.fulfillWithValue(comments)///повертаємо успішно виконаний масив юзерів. fulfillWithValue-метод що передає успішні дані

        }catch (e){////якщо щось пішло не так
            console.log(e)
            return thuncApi.rejectWithValue('Not Load Comments')
        }
    }

)
const initialState:CommentSliceType={comments:[]}//встановлюємо дефолтне значення з типом нашим і пустий масив, якщо не завантажено нічого
////створюємо кімнату зі слайсами---createSlice
export const commentSlice=createSlice({///////треба її прописати в Store
    name:'commentSlice',////префікс для типу екшена
    initialState:initialState,///початковий стан нашого обєкту
    reducers:{},///метод який впливає на початковий стан-state.  і може його змінювати---action(для синхронних операцій)
    extraReducers://reducers для асинхронних операцій
            builder => builder//реєструємо випадок
                /////.addCase---нове завдання.loadUsers---функція з посиланням.fulfilled---реалізація відповіді успіх
                ////state---берем стан,action---вкладаємо відповідь суди з масивом
        .addCase(loadComments.fulfilled,(state,action:PayloadAction<CommentType[]>)=>{
            state.comments=action.payload//state.users---наша відповідь.action.payload---корисне навантаження яке передається в сховище
})
        .addCase(loadComments.rejected,(state, action)=>{
            console.log({state, action})//////////.rejected ---у випадку помилки завантаження
        })
})
export const commentSliceActions={///його використовуємо у файлах
    ...commentSlice.actions,loadComments
}
////...userSlice---на основі цієї кімнати та її .actions----дії
