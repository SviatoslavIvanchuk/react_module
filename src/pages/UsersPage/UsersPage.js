import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";
import User from "../../components/User/User";
import css from "./users.module.css"
import UserDetails from "../../components/UserDetails/UserDetails";
import {postService} from "../../services/post.service";
import UserPosts from "../../components/UserDetails/UserPosts";
import {albumService} from "../../services/album.service";
import Album from "../../components/Album/Album";

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [userDetail, setUserDetail] = useState(null);
    const [userPosts, setUserPosts] = useState([]);

    const [album, setAlbum] = useState([]);


    useEffect(() => {
        userService.getAll().then(value => setUsers(value))
    },[])

    const getUserById = (id) => {
        userService.getById(id).then(value => setUserDetail(value))
    }
    // console.log(userDetail)

    const getPostsById = (userId) => {
            postService.getByUserId(userId).then(value => setUserPosts(value))
    }
    // console.log(userPosts);

    const getAlbum = (userId) => {
        albumService.getByUserId(userId).then(value => setAlbum(value))
    }
    // console.log(album);

    return (
        <div className={css.users}>
            <div className={css.usersList}>
                {users.map(value => <User key={value.id+100} user={value} getUserById={getUserById} getAlbum={getAlbum}/>)}
            </div>
            <div className={css.info}>
                <div className={css.userDetails}>
                    {userDetail && <UserDetails key={userDetail.id} user={userDetail} getPostById={getPostsById} />}
                    {album.map(value => <Album key={value.id} album={value} /> )}
                </div>
                    <UserPosts key={userPosts.id} userId={getPostsById} userPosts={userPosts} />
            </div>
        </div>
    );
};


export default UsersPage;