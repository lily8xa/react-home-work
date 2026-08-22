import {Manu} from "../components/Manu.tsx";
import {Outlet} from "react-router";
import './Pages.css'
export const MainLayout = () => {
    return (
        <div className={'main'}><Manu/>
            <div className={'content'}><Outlet/></div>

        </div>
    );
};
