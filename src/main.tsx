import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router";
import {Router} from "./routes/Router.tsx";
import {ThemeProvider} from "./context/ThemeContext.tsx";

createRoot(document.getElementById('root')!).render(
<ThemeProvider>
  <RouterProvider router={Router}/>
</ThemeProvider>
)
