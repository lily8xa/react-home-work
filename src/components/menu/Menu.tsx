import {Link, Outlet} from "react-router";

export const Menu = () => {
    return (
        <div>
        <ul>
            <li><Link to={'/users'}>Users</Link></li>
            <li><Link to={'/posts'}>Posts</Link></li>

        </ul>
            <Outlet/>
        </div>
    );
};
