import {Link} from "react-router";
import './Menu.css'

export const Menu = () => /////меню для переходу на потрібні сторінки
{
    return (
        <ul className={'main-menu'}><li><Link to={'/'}>Home</Link></li>
            <li><Link to={'login'}>Login</Link></li>
            <li><Link to={'auth/resources'}>Shou Authorization Products</Link></li>
        </ul>
    );
};
