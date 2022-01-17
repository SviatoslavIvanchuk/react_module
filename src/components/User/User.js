import React from 'react';


const User = ({user: {id, name, email}, getUserId}) => {
    // const {id, name, email} = props;


    return (
        <div className={'userBlock'}>
            <h3>{id}. {name}</h3>
            <h5>{email}</h5>
            <button onClick={() => getUserId(id)}>get User Details</button>
        </div>
    );
};

export default User;