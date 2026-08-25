import {createBrowserRouter} from "react-router";
import {MainLayout} from "../pages/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";

export const Routes =createBrowserRouter(
    [{path:'/',element:<MainLayout/>,
    children:[
        {path:'/users',element:<UsersPage/>},
        {path:'/posts',element:<PostsPage/>}
    ]}]
)
