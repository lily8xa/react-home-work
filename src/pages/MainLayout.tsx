import {Manu} from "../component/Manu.tsx";
import {Outlet} from "react-router";

export const MainLayout = () => {
    return (
        <><Manu/>
            <hr/>
            <Outlet/>
        </>
    );
};
