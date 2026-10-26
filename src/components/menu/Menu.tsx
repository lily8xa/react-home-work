import {Link, Outlet} from "react-router";
import './Menu.css'

export const Menu = () => {
    return (///компонентт з навігаційним меню
        <div className={'main-menu'}>
        <ul>
            <li><Link to={'/users'}>Users</Link></li>
            <li><Link to={'/posts'}>Posts</Link></li>
            <li><Link to={'/comments'}>Comments</Link></li>
            <li><Link to={'/complex'}>Complex</Link></li>
        </ul>
            <Outlet/>
        </div>
    );
};
