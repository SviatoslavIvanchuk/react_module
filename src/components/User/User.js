import React from 'react';

import css from "./user.module.css";

const User = ({user, getUserById}) => {
    const {id, name, username} = user;

    return (
        <div className={css.user} onClick={()=> getUserById(id)}>
            <h4>{id}. {name}</h4>
            <h5>User Name: "{username}"</h5>
        </div>
    );
};

export default User;