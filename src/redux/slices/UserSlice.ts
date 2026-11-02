import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {UserType} from "../../models/UserType.ts";
import {getAll} from "../../services/api.servise.ts";
type UserSliceType={/////////////////тип для дефолтного значення з масивом користувачів
    users:UserType[];////масив з юзерами
}
const initialUserSliceState:UserSliceType={users:[]}///////////////встановлюємо дефолтне значення з типом нашим і пустий масив, якщо не завантажено нічого
//////////функція завантаження даних createAsyncThunk який обробляє успішне і не успішне завантаження, також підтримує аргумент який можна використовувати для отримання певних даних(_)
export const loadUsers = createAsyncThunk<UserType[]>(//////функція Redux Toolkit, яка автоматично керує станом асинхронного запиту. він сам генерує три стани (екшени):
'userSlice,loadUsers',//Це унікальне ім'я екшену, префікс
    async (_,thuncAPI)=>{/////////(_)-аргумент який дає можливість відслідковувати(прик.id:string) і керувати. thuncAPI--•об'єкт, який надає доступ до корисних інструментів Redux всередині танка. Завдяки йому ми можемо вручну керувати результатом запиту, викликати інші екшени (thunkAPI.dispatch) або почитати поточний стан сховища (thunkAPI.getState()).

        try{
        const users=await getAll<UserType[]>('/users');////////////використовуємо функцію для торимання данних з АПІ,
            ////почекаємо поки відпрацює await
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
    name:'userSlice',/////префікс для типу екшена
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
