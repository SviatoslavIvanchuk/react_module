import React from 'react';
import {Link} from "react-router-dom";

import css from './post.module.css'

const Post = ({post, getPostById}) => {
    const {userId, id, title} = post;


    return (
        <div className={css.post} onClick={()=> getPostById(id)}>
            <Link to={`${id}`}>
            <div className={css.postBlock}>
                <h5>{userId}-{id}. {title}</h5>
            </div>
            </Link>
        </div>
    );
};

export default Post;