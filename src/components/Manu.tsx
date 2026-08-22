import {Link} from "react-router";

export const Manu = () => {
    return (
        <div>
            <ul>
                <li><Link to={''}>Home</Link></li>
                <li><Link to={'/users/jsonplaceholder'}>User Json Place</Link></li>
                <li> <Link to={'/users/dummyjson'}>User Dummy</Link></li>
                <li> <Link to={'/posts/jsonplaceholder'}>Posts Json Place</Link></li>
                <li> <Link to={'/posts/dummyjson'}>Posts Dummy</Link></li>
                <li> <Link to={'/comments/jsonplaceholder'}>Comment Json Plase</Link></li>
            </ul>
        </div>
    );
};
