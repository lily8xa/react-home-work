import type {DummyUserType} from "../models/UserType.ts";

export const baseUrl=import.meta.env.VITE_API_BASE_URL;
export const UserService= {
    getAllUsers: async():Promise<DummyUserType>=>{
    return await fetch(baseUrl + '/users')
        .then(value => value.json())
}
}
