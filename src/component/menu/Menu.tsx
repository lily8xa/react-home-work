import {Link} from "react-router";
import {MainLayout} from "../../layout/MainLayout.tsx";

export const Menu = () => {
    return (
        <ul>
            <li><Link to={''}><MainLayout/>Home</Link></li>
        </ul>
    );
};
