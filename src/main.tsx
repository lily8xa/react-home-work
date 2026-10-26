import {createRoot} from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import {RouterProvider} from "react-router";
import {Router} from "./routes/Router.tsx";
import {store} from "./redux/Store.ts";

createRoot(document.getElementById('root')!).render(
    //////////////підключаємо доступ до сховища і до навігацій
  <Provider store={store}>
      <RouterProvider router={Router}/>
      </Provider>,
)
