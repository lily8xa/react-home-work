import {Link} from "react-router";
import './Manu.css'

export const Manu = () => {
    return (
        <ul className={'main-manu'}>
            <li><Link to={'/cars'}>Show cars</Link></li>
            <li><Link to={'/cars/create'}>Add new car</Link></li>
        </ul>
    );
};
