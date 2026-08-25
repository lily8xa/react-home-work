import {Link} from "react-router";

export const Manu = () => {
    return (
        <ul>
            <li><Link to={'/'}>Menu</Link></li>
            <li><Link to={'/users'}>Users</Link></li>
            <li><Link to={'/posts'}>Posts</Link></li>
        </ul>
    );
};
