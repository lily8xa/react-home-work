import {Link, Outlet} from "react-router";
import './Menu.css'

export const Menu = () => {
    return (
        <div className={'main-menu'}>
        <ul>
            <li><Link to={'/users'}>Users</Link></li>
            <li><Link to={'/posts'}>Posts</Link></li>

        </ul>
            <Outlet/>
        </div>
    );
};
