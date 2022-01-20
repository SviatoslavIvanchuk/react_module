import React from 'react';

import css from "./postDetail.module.css"

const PostDetails = ({post, getCommentsId}) => {
    const {userId, id, title, body} = post;
    console.log(id)
    return (
        <div className={css.detail}>
            <div className={css.postDetail}>
                <h3>{userId}-{id}. {title}</h3>
                <h4>{body}</h4>
            </div>
            <button onClick={() =>  getCommentsId(id)}>Comments</button>
        </div>
    );
};

export default PostDetails;