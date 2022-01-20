import React from 'react';

import css from "./userDetails.module.css";

const UserDetails = ({user, getPostById}) => {

    let userList = [];
    function getItem(user) {
        for (const userKey in user) {
            if (typeof (user[userKey]) === 'object') {
                getItem(user[userKey]);
            } else {
                userList.push(`${userKey}: ${user[userKey]}`)
            }
        }
    }
    getItem(user)
    // console.log(userList)
    // console.log(user.id)

    return (
        <div className={css.grid}>
            {userList.map(item => <h5 className={css.lineStyle}>{item}</h5>)}
            <button onClick={() => getPostById(user.id)}>Posts</button>
        </div>
    );
};

export default UserDetails;