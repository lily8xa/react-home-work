import {Link, Outlet} from "react-router";

export const Menu = () => {
    return (
        <ul>
            <li><Link to={'/red'}>Red</Link></li>
            <li><Link to={'/red/first'}>Red First</Link></li>
            <li><Link to={'/red/second'}>Red Second</Link></li>
            <li><Link to={'/green'}>Green</Link></li>
            <li><Link to={'green/first'}>Green First</Link></li>
            <li><Link to={'green/second'}>Green Second</Link></li>
            <li><Link to={'green/fin'}>Change Theme</Link></li>
            <Outlet/>
        </ul>
    );
};
