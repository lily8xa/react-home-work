import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layout/MainLayout.tsx";
import {UsersPages} from "../pages/UsersPages.tsx";
import {CartsPages} from "../pages/CartsPages.tsx";

export const router =createBrowserRouter([
    {path:'',element:<MainLayout/>,
    children:[
        {path:'/users',element:<UsersPages/>,
        children:[
            {path:':id/carts',element:<CartsPages/>}
        ]}
    ]}
])
