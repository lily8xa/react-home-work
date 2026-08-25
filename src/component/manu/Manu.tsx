import {Link} from "react-router";
import './Manu.css'

export const Manu = () => {
    return (
        <ul className={'main-manu'}>
            <li><Link to={'/'}>Menu</Link></li>
            <li><Link to={'/users'}>Users</Link></li>
            <li><Link to={'/posts'}>Posts</Link></li>
        </ul>
    );
};
