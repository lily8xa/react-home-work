import {UsersPages} from "../pages/UsersPages.tsx";
import {CartsPages} from "../pages/CartsPages.tsx";

export const MainLayout = () => {
    return (
        <><h1>MainPage</h1>
            <CartsPages/>
        <UsersPages/>
        </>
    );
};
