import * as axios from "axios";
import type {UserWithTokensType} from "../models/UserWithTokensType.ts";
import type {ProductResponseType, ProductType} from "../models/ProductsType.ts";
import {retrieveLocalStorage} from "./helpers.ts";
import type {TokensPairType} from "../models/TokensPairType.ts";


const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});
export type LoginDataType={
username:string;
password:string;
    expiresInMins:number;
}
axiosInstance.interceptors.request.use((requestObject)=>
{
    if (requestObject.method?.toUpperCase()==='GET')///стрінга має зазначись великими літерами ?. -бо методу може не бути
        ////якщо є обєкт, то додаємо хедер витягнутий і типізований з локал сторедж ексес токен
    {requestObject.headers.Authorization='Bearer '+ retrieveLocalStorage<UserWithTokensType>('user').accessToken}
    return requestObject
})
export const login= ///створюємо функція для логінації
    async ({username,password,expiresInMins}:LoginDataType):Promise<UserWithTokensType>=>{///дані які несе функція
    const {data:userWithTokens}=await axiosInstance.post<UserWithTokensType>///постовий запит для перевірки чи співпадають дані на сервері з введеними в форму
    ('/login',{username,password,expiresInMins})///на ендпойнт посилання з данними
    console.log(userWithTokens)
    localStorage.setItem('user',JSON.stringify(userWithTokens));///кладемо дані з логінації в локал, через .stringify бо інше в локал не лізе
return userWithTokens;
}
export const loadAuthProduct=async ():Promise<ProductType[]>=>{
    const{data}=await axiosInstance.get<ProductResponseType>('/products');
    console.log(data.products)
    return data.products;

}
export const refresh=async ()=>{
    const userWithTokens=retrieveLocalStorage<UserWithTokensType>('user');///беремо аксеес токен з локал
    const {data:{accessToken,refreshToken}}=await axiosInstance.post<TokensPairType>('/refresh',{
        refreshToken:userWithTokens.refreshToken,
        expiresInMins:1
    });///запит на пару токенів
    userWithTokens.accessToken=accessToken; ///новийтокен аксесс
    userWithTokens.refreshToken=refreshToken;///новий токен рефреш
    localStorage.setItem('user',JSON.stringify(userWithTokens));////пхнемо в локал новий т окен
}
