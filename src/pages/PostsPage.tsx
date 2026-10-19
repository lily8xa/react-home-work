import {useAppSelector} from "../hooks/UseAppSelector.tsx";

export const PostsPage = () => {
    const {posts}=useAppSelector(({postSlice})=>postSlice)
    console.log(posts)
    return (
        <></>
    );
};
