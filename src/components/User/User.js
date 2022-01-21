import React from 'react';

import css from "./user.module.css";

const User = ({user, getUserById, getAlbum}) => {
    const {id, name, username} = user;

    return (
        <div>
        <div className={css.user} onClick={()=> getUserById(id)}>
            <h4>{id}. {name}</h4>
            <h5>User Name: "{username}"</h5>
        </div>
            <button className={css.button} onClick={()=> getAlbum(id)}>Album</button>
        </div>
    );
};

export default User;