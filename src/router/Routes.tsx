import {createBrowserRouter} from "react-router";
import {MainLayout} from "../pages/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {Users} from "../pages/Users.tsx";
import {Posts} from "../pages/Posts.tsx";
import {Comments} from "../pages/Comments.tsx";
import {Products} from "../pages/Products.tsx";

export const routes=createBrowserRouter([
    {path:'/',element:<MainLayout/> ,

        children:
            [{index:true,element:<HomePage/>},
            {path:'users',element:<Users/>},
            {path:'posts',element:<Posts/>},
            {path:'comments',element:<Comments/>},
            {path:'products',element:<Products/>}]},


])
