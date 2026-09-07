import {Manu} from "../components/manu/Manu.tsx";
import {Outlet} from "react-router";

export const MainLayout = () => {
    return (
        <><Manu/>
        <Outlet/></>
    );
};
