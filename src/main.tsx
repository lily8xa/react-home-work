import {createRoot} from 'react-dom/client'
import './index.css'
import {Router} from "./routes/Router.tsx";
import {RouterProvider} from "react-router";

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={Router}/>,
)
