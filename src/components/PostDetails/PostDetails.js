import React from 'react';
import {Link, Outlet} from "react-router-dom";

import css from "./postDetail.module.css"

const PostDetails = ({post, getCommentsId}) => {
    const {userId, id, title, body} = post;
    return (
        <div className={css.detail}>
            <div className={css.postDetail}>
                <h3>{userId}-{id}. {title}</h3>
                <h4>{body}</h4>
            </div>
            <Link to={`comments`}><button onClick={() =>  getCommentsId(id)}>Comments</button></Link>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostDetails;