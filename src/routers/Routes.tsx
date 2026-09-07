import {createBrowserRouter} from "react-router";
import {MainLayout} from "../pages/MainLayout.tsx";
import {ProductsPage} from "../pages/ProductsPage.tsx";

export const Routes = createBrowserRouter(
    [{path: '/', element:<MainLayout/>,
    children:[
        {path:'/products',element:<ProductsPage/>}
    ]}]
)
