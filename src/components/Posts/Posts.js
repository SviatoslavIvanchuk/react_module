import React from 'react';


const Posts = ({post:{id, title, body}}) => {

    return (
        <div className={'postBlock'}>
            <h4>{id}. {title}</h4>
            <p>{body}</p>
        </div>
    );
};

export default Posts;