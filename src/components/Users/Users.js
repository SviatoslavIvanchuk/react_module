import React, {useEffect, useState} from 'react';

import {urls} from "../../config/urls";
import User from "../User/User";
import UserDetails from "../User/UserDetails";
import Posts from "../Posts/Posts"

const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(urls.users)
            .then(value => value.json())
            .then(value => setUsers(value))
    }, [])

    const getUserId = (id) => {
        fetch(`${urls.users}/${id}`)
            .then(value => value.json())
            .then(value => setUser(value))
    }
    // console.log(User)

    const getPosts = () => {
        fetch(`${urls.posts}?userId=${user.id}`)
            .then(value => value.json())
            .then(value => setPosts(value))
    }
    return (
        <div>
            <div className={'usersInfo'}>
                <div className={'usersList'}>
                    {users.map(value => <User key={value.id} user={value} getUserId={getUserId}/>)}
                </div>
                <div className={'userDetail'}>
                    {user &&  <UserDetails user={user} getPosts={getPosts}/>}
                </div>
            </div>

            <div className={'userPosts'}>
                {posts.map((value => <Posts key={value.id} post={value} />))}
            </div>

        </div>
    );
};

export default Users;