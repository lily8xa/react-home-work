import {createBrowserRouter} from "react-router";

export const Router = createBrowserRouter(
    [{path:'/',element:<MainLoyaut/>,
    children:[{path:'/users',element:<UsersPage/>},
        {path:'/posts',element:<PostsPage/>},
    ]}]
)
