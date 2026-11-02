import type {PostType} from "../../models/PostType.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.servise.ts";



type PostSliceType={/////тип для дефолтного значення з масивом
    posts:PostType[]////масив з постами
}
const initialPostSliceState:PostSliceType={posts:[]};//////встановлюємо дефолтне значення з типом нашим і пустий масив, якщо не завантажено нічого
//////////функція завантаження даних createAsyncThunk який обробляє успішне і не успішне завантаження, також підтримує аргумент який можна використовувати для отримання певних даних(_)
export const loadPosts=createAsyncThunk<PostType[]>(/////функція Redux Toolkit, яка автоматично керує станом асинхронного запиту. він сам генерує три стани (екшени):
    'postSlice,loadPosts',////Це унікальне ім'я екшену, префікс
async(_,thuncAPI)=>{////////(_)-аргумент який дає можливість відслідковувати(прик.id:string) і керувати. thuncAPI--•об'єкт, який надає доступ до корисних інструментів Redux всередині танка. Завдяки йому ми можемо вручну керувати результатом запиту, викликати інші екшени (thunkAPI.dispatch) або почитати поточний стан сховища (thunkAPI.getState()).
try{
    const posts=await getAll<PostType[]>('/posts')//////використовуємо функцію для торимання данних з АПІ,
    ////почекаємо поки відпрацює await
    console.log(posts)
    return thuncAPI.fulfillWithValue(posts);/////////повертаємо успішно виконаний масив юзерів. fulfillWithValue-метод що передає успішні дані
}catch (error){//////якщо щось пішло не так
    console.log(error);
    return thuncAPI.rejectWithValue('some error')
}
}
)
////створюємо кімнату зі слайсами---createSlice

export const postSlice=createSlice({////треба її прописати в Store
    name:'postSlice',///префікс для типу екшена
    initialState:initialPostSliceState,///початковий стан нашого обєкту
    reducers:{},///метод який впливає на початковий стан-state.  і може його змінювати---action(для синхронних операцій)
    extraReducers:////reducers для асинхронних операцій
            builder => builder//реєструємо випадок
                /////.addCase---нове завдання.loadUsers---функція з посиланням.fulfilled---реалізація відповіді успіх
                ////state---берем стан,action---вкладаємо відповідь суди з масивом
        .addCase(loadPosts.fulfilled,(state,action:PayloadAction<PostType[]>)=>{
            state.posts=action.payload ////state.users---наша відповідь.action.payload---корисне навантаження яке передається в сховище
        })
        .addCase(loadPosts.rejected,(state,action)=>{///////////////.rejected ---у випадку помилки завантаження
console.log(state,action)
})
    })
export const postSliceAction={///його використовуємо у файлах
    ...postSlice.actions,loadPosts
}
///...userSlice---на основі цієї кімнати та її .actions----дії
