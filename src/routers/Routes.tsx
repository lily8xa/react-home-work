import {createBrowserRouter} from "react-router";
import {MainLayout} from "../pages/mainLayout/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage/UsersPage.tsx";

export const Routes =createBrowserRouter(
    [{path:'/',element:<MainLayout/>,
        children:[
            {path:'/users',element:<UsersPage/>},
            // {path:'/posts',element:<PostsPage/>}
        ]}]
);
