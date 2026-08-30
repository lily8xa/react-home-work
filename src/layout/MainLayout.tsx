import {Outlet} from "react-router";
import {Menu} from "../component/menu/Menu.tsx";

export const MainLayout = () => {
    return (
        <><Outlet/>
            <Menu/>
        </>
    );
};
