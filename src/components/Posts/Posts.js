import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Post from "./Post/Post";
import {getAllPosts} from "../../store";

const Posts = () => {
    const {posts} = useSelector(state => state['postsReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    console.log(posts);
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    );
};

export default Posts;