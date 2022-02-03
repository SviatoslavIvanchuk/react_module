import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllComments} from "../../store";
import Comment from "./Comment/Comment";

const Comments = () => {
    const {comments} = useSelector(state => state['commentsReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments())
    }, [dispatch])

    console.log(comments);
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
        </div>
    );
};

export default Comments;