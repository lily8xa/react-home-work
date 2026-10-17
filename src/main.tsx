import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Provider} from "react-redux";
import {RouterProvider} from "react-router";
import {Router} from "./routes/Router.tsx";

createRoot(document.getElementById('root')!).render(
  <Provider store={}>
      <RouterProvider router={Router}
      <Provider/>,
)
