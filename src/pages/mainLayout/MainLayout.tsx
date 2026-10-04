import {Outlet} from "react-router";
import {Menu} from "../../components/menu/Menu.tsx";

export const MainLayout = () => {///для відовраження меню переходу за посиланнями, гловний стиль сторінки, та відображення динамічних даних з URL
    return (
        <><Menu/>
            <Outlet/>
           </>
    );
};
