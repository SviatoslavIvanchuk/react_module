import React from 'react';

import css from "./posts.module.css"
import Post from "../../components/Post/Post";
import {Outlet} from "react-router-dom";

const PostsPage = ({posts, getPostById}) => {

    return (
        <div className={css.postsPage}>
            <div className={css.postsList}>
            {posts.map(value => <Post post={value} getPostById={getPostById}/>)}
            </div>
            <div className={css.postsDetails}>
                <Outlet/>
            </div>

        </div>
    );
};

export default PostsPage;