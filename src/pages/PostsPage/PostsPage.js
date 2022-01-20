import React, {useEffect, useState} from 'react';

import {postService} from "../../services/post.service";
import css from "./posts.module.css"
import PostList from "../../components/Post/PostList";
import PostDetails from "../../components/PostDetails/PostDetails";
import {commentService} from "../../services/comment.service";
import Comments from "../../components/Comments/Comments"

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);

    const [comments, setComments] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts(value))
    },[])

    const getPosts = (id) => {
        postService.getById(id).then(value => setPost(value))
    }

    const getComments = (postId) => {
        commentService.getByPostId(postId).then(value => setComments(value))
    }
    // console.log(comments);

    return (
        <div className={css.postsPage}>
            <div className={css.postsList}>
                {posts.map(value => <PostList key={value.id} post={value} getPosts={getPosts} />)}
            </div>
            <div className={css.postsDetails}>
                <div>
                    {post && <PostDetails key={post.id} post={post} getCommentsId={getComments}  /> }
                </div>
                <div className={css.comments}>
                    {comments.map(value => <Comments key={value.id} comment={value} /> )}
                </div>
            </div>
        </div>
    );
};

export default PostsPage;