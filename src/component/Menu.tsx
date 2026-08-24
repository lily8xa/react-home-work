import {Link} from "react-router";
import './Menu.css'

export const Menu = () => {
    return (
        <div>
            <ul className={'main-menu'}>
                <li>
                    <Link to={''}>Home</Link>
                </li>
                <li>
                    <Link to={'/users'}>Users</Link>
                </li>
                <li>
                    <Link to={'/users/dummyjson'}>UsersDummy</Link>
                </li>
                <li>
                    <Link to={'/posts'}>Posts</Link>
                </li>
                <li>
                    <Link to={'/posts/dummyjson'}>PostsDummy</Link>
                </li>
                <li>
                    <Link to={'/comments'}>Comments</Link>
                </li>
                <li>
                    <Link to={'/comments/dummyjson'}>CommentsDummy</Link>
                </li>

            </ul>
        </div>
    );
};
