import React from 'react';
import { Link } from "react-router-dom";

import css from "./user.module.css";
const User = ({user, getUserId, getAlbumById}) => {
    const {id, name, username} = user;


    return (
        <div className={css.user}>
            <Link to={`${id}`}>
                <div className={css.userBlock} onClick={() => getUserId(id)}>
                    <h4>{id}. {name}</h4>
                    <h5>User Name: "{username}"</h5>
                </div>
            </Link>
            <Link to={`${id}/albums`}><button className={css.button} onClick={() => getAlbumById(id)}>Album</button></Link>
        </div>
    );
};

export default User;