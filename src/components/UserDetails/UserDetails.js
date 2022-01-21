import React from 'react';

import css from "./userDetails.module.css";
import { Link} from "react-router-dom";

const UserDetails = ({user, getPostByUserId}) => {

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
            <Link to={'posts'}><button onClick={() => getPostByUserId(user.id) }>Posts</button></Link>

        </div>
    );
};

export default UserDetails;