import {Manu} from "../components/manu/Manu.tsx";
import {Outlet} from "react-router";
import {PaginationLayout} from "./PaginationLayout.tsx";

export const MainLayout = () => {
    return (
        <><Manu/>
            <PaginationLayout/>
        <Outlet/></>
    );
};
