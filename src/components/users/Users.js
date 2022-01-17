import {useEffect, useState} from "react";

import User from "../user/User";
import '../../App.css';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, [])

    return (
        <div className={'users'}>
            {users.map(value => <User id={value.id} name={value.name} surname={value.surname} email={value.email}/>)}
        </div>
    );
};

export default Users;