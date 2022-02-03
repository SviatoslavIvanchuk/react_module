import React from 'react';

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    
    return (
        <div>
            <h4>{postId}-{id}. {name} --- {email}</h4>
            <p>{body}</p>
        </div>
    );
};

export default Comment;