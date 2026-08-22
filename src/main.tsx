import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import {MainLayout} from "./pages/MainLoaut.tsx";
import {Users} from "./pages/Users.tsx";
import {Posts} from "./pages/Posts.tsx";
import {Comments} from "./pages/Comments.tsx";
import {Products} from "./pages/Products.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route path={'users'} element={<Users/>}></Route>
              <Route path={'posts'} element={<Posts/>}></Route>
              <Route path={'comments'} element={<Comments/>}></Route>
              <Route path={'products'} element={<Products/>}></Route>
          </Route>
      </Routes>
      </BrowserRouter>,
)
