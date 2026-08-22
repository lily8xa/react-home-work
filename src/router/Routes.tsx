import {createBrowserRouter} from "react-router";
import {MainLayout} from "../pages/MainLayout.tsx";
import {Users} from "../components/Users.tsx";
import {UsersDummy} from "../components/UsersDummy.tsx";
import {Posts} from "../components/Posts.tsx";
import {Main} from "../pages/Main.tsx";
import {PostsDummy} from "../components/PostsDummy.tsx";
import {Comments} from "../components/Comments.tsx";

export const Routes = createBrowserRouter([
    {path:'/', element:<MainLayout/>,
        children:[
            {index:true, element:<Main/>},
            {path:'/users/jsonplaceholder', element:<Users/>},
            {path:'/users/dummyjson',element:<UsersDummy/>},
            {path:'/posts/jsonplaceholder',element:<Posts/>},
            {path:'/posts/dummyjson',element:<PostsDummy/>},
            {path:'/comments/jsonplaceholder',element:<Comments/>}

        ]

    },
])
