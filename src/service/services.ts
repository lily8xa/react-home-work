import * as axios from "axios";
import type {UserWithTokensType} from "../models/UserWithTokensType.ts";


const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});
export type LoginDataType={
username:string;
password:string;
    expiresInMins:number;
}
// axios.interceptors.use(requstObject)=>
// {
//     if (requestObgect.method?.toUpperCase()==='GET')
//     {reqestObject.headers.autorisation='Bearer '+retrieveLocalStorage<UserWithTokensType>('users').accessToken}
// }
export const login= ///створюємо функція для логінації
    async ({username,password,expiresInMins}:LoginDataType):Promise<UserWithTokensType>=>{///дані які несе функція
    const {data:userWithTokens}=await axiosInstance.post<UserWithTokensType>///постовий запит для перевірки чи співпадають дані на сервері з введеними в форму
    ('/login',{username,password,expiresInMins})///на ендпойнт посилання з данними
    console.log(userWithTokens)
    localStorage.setItem('user',JSON.stringify(userWithTokens));///кладемо дані з логінації в локал, через .stringify бо інше в локал не лізе
return userWithTokens;
}
