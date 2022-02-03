import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import User from "./User/User";
import {getAllUsers} from "../../store";

const Users = () => {
    const {users} = useSelector(state => state['usersReducer']);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    console.log(users);
    return (
        <div>
            {users.map(user => <User key={user.id} user={user} />)}
        </div>
    );
};

export default Users;