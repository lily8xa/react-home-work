import * as axios from "axios";
import type {UserWithTokensType} from "../models/UserWithTokensType.ts";
import type {ProductResponseType, ProductType} from "../models/ProductsType.ts";
import {retrieveLocalStorage} from "./helpers.ts";
import type {TokensPairType} from "../models/TokensPairType.ts";


const axiosInstance = axios.create({ ///Аксіос віддає пакет данних який дає більше можливостей керування ніж феч.
    baseURL: 'https://dummyjson.com/auth',//// щоб не додавати посилання до кожного наступного запиту.
    headers: {}////Якщо потрібно впровадити дані до усіх запитів
});
export type LoginDataType={
username:string;
password:string;
    expiresInMins:number;
}
axiosInstance.interceptors.request.use////////інтерсептор-це перехоплювач запиту для додавання  хедера з токеном
((requestObject)=>
{
    ////метод відрізняє якого типу був запит, робить перевірки чи потрібно додавати чи віднімати хедери.
    if (requestObject.method?.toUpperCase()==='GET')///стрінга має зазначись великими літерами ?. -бо методу може не бути
        ////якщо є обєкт, то додаємо хедер витягнутий і типізований з локал сторедж ексес токен
    {requestObject.headers.Authorization='Bearer '+ retrieveLocalStorage<UserWithTokensType>('user').accessToken}///токен додається до Get, щоб отримати дані уже авторизованого користувача.(якщо я вірно зрозуміла запитання)
    return requestObject ////повертаємо уже авторизованого користувача
})
export const login= ///створюємо функція для логінації
    async ({username,password,expiresInMins}:LoginDataType):Promise<UserWithTokensType>=>{///дані які несе функція
    const {data:userWithTokens}///Головна кладовка DATA у якій є все,після успішної авторизації з'явиться користувач з двома токенами.
        =await axiosInstance.post<UserWithTokensType>///Дженерік з типізацією тут, щоб можна було отримати токени і використати
        ///постовий запит для перевірки чи співпадають дані на сервері з введеними в форму
    ('/login',{username,password,expiresInMins})///на ендпойнт посилання з данними, після успіху отримуємо пару токенів
    console.log(userWithTokens)
    localStorage.setItem('user',JSON.stringify(userWithTokens));///кладемо дані з логінації в локал, через .stringify бо інше в локал не лізе
return userWithTokens;
}
export const loadAuthProduct=async ():Promise<ProductType[]>=>{
    const{data}=await axiosInstance.get<ProductResponseType>('/products');///відповідь від аксіос запакована в комірку DATA
    console.log(data.products)
    return data.products;///в головній кладовці DATA з данними від аксіос, беремо масив з продуктами

}
export const refresh=async ()=>{
    const userWithTokens=retrieveLocalStorage<UserWithTokensType>('user');///беремо збережені дані користувача з локал
    const {data:{accessToken,refreshToken}}=await axiosInstance.post<TokensPairType>('/refresh',{
        refreshToken:userWithTokens.refreshToken,///рефреш взяли щоб отримати нову пару
        expiresInMins:1///на 1 мінутку
    });///запит на пару токенів
    userWithTokens.accessToken=accessToken; ///доступ до аксесс токена
    userWithTokens.refreshToken=refreshToken;///доступ до рефреш токена
    localStorage.setItem('user',JSON.stringify(userWithTokens));////пхнемо в локал новий токен, не створюємо нового користувача, просто додаємо нову пару токенів
}
