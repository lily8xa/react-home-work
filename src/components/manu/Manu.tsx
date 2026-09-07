import {Link} from "react-router";

export const Manu = () => {
    return (
        <ul>
            <li><Link to={'/products'}>Products</Link></li>
        </ul>
    );
};
