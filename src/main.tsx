import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router";
import {Routes} from "./routes/Routes.tsx";

createRoot(document.getElementById('root')!).render(///точка входу де рендериться основний компонент і будується DOM структура
    <RouterProvider router={Routes}/>,
);
