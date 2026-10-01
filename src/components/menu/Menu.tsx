import {Link} from "react-router";

export const Menu = () => {
    return (
        <ul><li><Link to={'/'}>Home</Link></li>
            <li><Link to={'login'}>Login</Link></li>
            <li><Link to={'auth/resources'}>Shou Authorization Products</Link></li>
        </ul>
    );
};
