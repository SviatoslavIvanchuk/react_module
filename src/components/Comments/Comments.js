import React from 'react';

import css from "./comments.module.css"

const Comments = ({comment}) => {
    const {postId, id, name, email, body} = comment;

    return (
        <div className={css.commentBlock}>
            <h4>{postId}-{id}. {name}</h4>
            <p>Email: {email}</p>
            <h5>{body}</h5>
        </div>
    );
};

export default Comments;