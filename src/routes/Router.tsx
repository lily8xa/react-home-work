import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layout/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {CartsPage} from "../pages/CartsPage.tsx";


export const Router =createBrowserRouter(
        [
        {path:'',element:<MainLayout/>,
    children:[
        {path:'/users',element:<UsersPage/>},
        {path:'/user/:id/carts',element:<CartsPage/>}]
        }]
)
