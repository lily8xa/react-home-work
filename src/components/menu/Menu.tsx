import {Link} from "react-router";

export const Menu = () => {
    return (
        <ul>
            <li><Link to={'/users'}>Users</Link></li>
            <li><Link to={'/posts'}>Posts</Link></li>

        </ul>
    );
};
