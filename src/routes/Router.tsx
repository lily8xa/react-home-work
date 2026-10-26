import {createBrowserRouter} from "react-router";
import {MainLayout} from "../pages/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";
import {ComplexPage} from "../pages/ComplexPage.tsx";
///////////створюємо роути для навігації на потрібні сторінки
export const Router = createBrowserRouter(
    [{path:'/',element:<MainLayout/>,
    children:[{path:'users',element:<UsersPage/>},
        {path:'posts',element:<PostsPage/>},
        {path:'comments',element:<CommentsPage/>},
        {path:'complex',element:<ComplexPage/>}
    ]}]
)
