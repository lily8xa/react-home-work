import {Menu} from "../cpmponents/Menu.tsx";
import {Outlet} from "react-router";
import './PagesSize.css'
export const MainLayout = () => {
    return (
        <div className={'pages'}><Menu/>

            <p className={'info'}><Outlet/></p>
        </div>
    );
};
