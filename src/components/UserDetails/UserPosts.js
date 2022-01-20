import React from 'react';

import Post from "../Post/Post";
import css from "./userDetails.module.css"

const UserPosts = ({userPosts}) => {

    console.log(userPosts);

    return (
        <div className={css.postBlock}>
            {userPosts.map(value => <Post key={userPosts.id} post={value} />)}
        </div>
    );
};

export default UserPosts;