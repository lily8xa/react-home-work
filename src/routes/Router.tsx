import {createBrowserRouter} from "react-router";
import {Menu} from "../components/Menu.tsx";
import {Red} from "../components/Red.tsx";
import {RedFirst} from "../components/RedFirst.tsx";
import {RedSecond} from "../components/RedSecond.tsx";
import {GreenSecond} from "../components/GreenSecond.tsx";
import {GreenWithButton} from "../components/GreenWithButton.tsx";
import {Green} from "../components/Green.tsx";
import {GreenFirst} from "../components/GreenFirst.tsx";

export const Router=createBrowserRouter(
    [{path:'/',element:<Menu/>,children:[
            {path:'red/',element:<Red/>},
            {path:'red/first',element:<RedFirst/>},
            {path:'red/second',element:<RedSecond/>},
            {path:'green/',element:<Green/>,
            children:[
                {path:'first',element:<GreenFirst/>},
                {path:'second',element:<GreenSecond/>},
                {path:'fin',element:<GreenWithButton/>}

            ]}
        ]
    }]
)
