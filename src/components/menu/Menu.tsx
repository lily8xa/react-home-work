import {Link} from "react-router";

export const Menu = () => {
    return (
        <ul>
            <li><Link to={'/users'}>Users</Link></li>
        </ul>
    );
};
