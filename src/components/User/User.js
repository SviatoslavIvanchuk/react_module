import React from 'react';


const User = ({user}) => {
    const {id, name, username, email} = user;

    return (
        <div className={'userBlock'}>
            <h3>{id}. {name} -- {username} -- {email} </h3>
        </div>
    );
};

export default User;