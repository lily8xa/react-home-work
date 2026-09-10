import {Link} from "react-router";
import './Manu.css'

export const Manu = () => {
    return (
        <ul className={"main-manu"}>
            <li><Link to={'/products'}>Products</Link></li>
        </ul>
    );
};
