import {Link} from "react-router";
import './Menu.css'

export const Menu = () => {
    return (
        <ul className={'main-menu'}>
            <li><Link to={''}>Home</Link></li>
            <li><Link to={'/users'}>Users</Link></li>

        </ul>
    );
};
