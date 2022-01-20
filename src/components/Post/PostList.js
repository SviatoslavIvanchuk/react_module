import React from 'react';

import css from './post.module.css'

const PostList = ({post, getPosts}) => {
    const {userId, id, title} = post;
    return (
        <div className={css.postBlock} onClick={() => getPosts(id)}>
            <h5>{userId}-{id}. {title}</h5>
        </div>
    );
};

export default PostList;