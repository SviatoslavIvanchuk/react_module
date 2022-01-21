import React from 'react';

import css from "./comments.module.css"
import Comment from "./Comment/Comment";

const Comments = ({comments}) => {

    return (
        <div className={css.commentBlock}>
            {comments.map(value => <Comment comment={value} /> )}
        </div>
    );
};

export default Comments;