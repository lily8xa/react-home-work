import {createRoot} from 'react-dom/client'
import './index.css'
import {Routes} from "./router/Routes.tsx";
import {RouterProvider} from "react-router";

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={Routes}/>

)
