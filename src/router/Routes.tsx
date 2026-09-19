import {createBrowserRouter} from "react-router";
import {MainLayout} from "../pages/mainLayout/MainLayout.tsx";
import {CarsPage} from "../pages/carsPage/CarsPage.tsx";
import {CreateCarPage} from "../pages/createCarPage/CreateCarPage.tsx";

export const Routes = createBrowserRouter([
    {path:'/',element:<MainLayout/>,
    children:[{path:'/cars',element:<CarsPage/>},
        {path:'/cars/create',element:<CreateCarPage/>}]
    }
])
