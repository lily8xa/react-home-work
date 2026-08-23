import {createBrowserRouter} from "react-router";
import {MainLayout} from "../pages/MainLayout.tsx";
import {UsersPages} from "../pages/UsersPages.tsx";
import {PostPages} from "../pages/PostPages.tsx";
import {CommentPages} from "../pages/CommentPages.tsx";
import {UsersDummyPages} from "../pages/UsersDummyPages.tsx";

 export const userDummyPath='/users'
export const Routes = createBrowserRouter([
    {path:'',element:<MainLayout/>,children:[
            {path:'/users', element:<UsersPages/>},
            {path:'/users/dummyjson', element:<UsersDummyPages/>},
            {path:'/posts',element:<PostPages/>},
            {path:'/comments', element:<CommentPages/>}
        ]}
])
