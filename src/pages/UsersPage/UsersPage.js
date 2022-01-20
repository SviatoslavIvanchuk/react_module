import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";
import User from "../../components/User/User";
import css from "./users.module.css"
import UserDetails from "../../components/UserDetails/UserDetails";
import {postService} from "../../services/post.service";
import UserPosts from "../../components/UserDetails/UserPosts";

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [userDetail, setUserDetail] = useState(null);

    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value))
    },[])

    const getUserById = (id) => {
        userService.getById(id).then(value => setUserDetail(value))
    }
    console.log(userDetail)

    const getPostsById = (userId) => {
        postService.getByUserId(userId).then(value => setUserPosts(value))
    }
    // console.log(userPosts);

    return (
        <div className={css.users}>
            <div className={css.usersList}>
                {users.map(value => <User key={value.id+100} user={value} getUserById={getUserById} />)}
            </div>
            <div className={css.info}>
                <div className={css.userDetails}>
                    {userDetail && <UserDetails key={userDetail.id} user={userDetail} getPostById={getPostsById} />}
                </div>
                    <UserPosts key={userPosts.id} userId={getPostsById} userPosts={userPosts} />
            </div>
        </div>
    );
};

export default UsersPage;