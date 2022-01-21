import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {userService} from "../../services/user.service";
import User from "../../components/User/User";
import css from "./users.module.css"

const UsersPage = ({getUserId, getAlbumById}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value))
    },[])


    return (
        <div className={css.users}>
            <div className={css.links}>
                {users.map(value => <User key={value.id+100} user={value} getUserId={getUserId} getAlbumById={getAlbumById}/>)}
            </div>
            <div className={css.info}>
                <Outlet/>
            </div>
        </div>
    );
};

export default UsersPage;