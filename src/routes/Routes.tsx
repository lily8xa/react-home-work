import {createBrowserRouter} from "react-router";
import {MainLayout} from "../pages/mainLayout/MainLayout.tsx";
import {HomePage} from "../pages/homePage/HomePage.tsx";
import {LoginPage} from "../pages/loginPage/LoginPage.tsx";
import {AuthResourcesPage} from "../pages/authResourcesPage/AuthResourcesPage.tsx";

export const Routes =createBrowserRouter([
    {path:'/',element:<MainLayout/>,children:[
            {index:true,element:<HomePage/>},
            {path:'login',element:<LoginPage/>},
            {path:'auth/resources',element:<AuthResourcesPage/>}
        ]
    }

])
