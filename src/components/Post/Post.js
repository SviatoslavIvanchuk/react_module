import React from 'react';

import css from './post.module.css'

const Post = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div className={css.postBlock}>
            <h5>{userId}-{id}. {title}</h5>
            <h6>{body}</h6>
        </div>
    );
};

export default Post;