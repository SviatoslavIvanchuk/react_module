import {Routes, Route} from "react-router-dom";

import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import Layout  from "./components/Layout/Layout";
import UsersDetailsPage from "./pages/UsersPage/UsersDetailsPage/UsersDetailsPage";
import {useEffect, useState} from "react";
import {userService} from "./services/user.service";
import {postService} from "./services/post.service";
import UserPosts from "./components/UserDetails/UserPosts";
import {albumService} from "./services/album.service";
import AlbumPage from "./pages/UsersPage/AlbumPage/AlbumPage";
import {photoService} from "./services/photo.service";
import Photos from "./components/Photo/Photos";
import PostDetails from "./components/PostDetails/PostDetails";
import Comments from "./components/Comments/Comments";
import {commentService} from "./services/comment.service";


function App() {
    const [user, setUser] = useState(null);
    const [userPosts, setUserPosts] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [photos, setPhotos] = useState([]);

    const [posts, setPosts] = useState(null);
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);

    // =====================================UsersPage==========================================
    const getUserId = (id) => {
        userService.getById(id).then(value => setUser(value))
    }

    const getPostByUserId = (id) => {
        postService.getByUserId(id).then(value => setUserPosts(value))
    }

    const getAlbumById = (id) => {
        albumService.getByUserId(id).then(value => setAlbums(value))
    }

    const getIdForPhoto = (id) => {
        photoService.getByAlbumId(id).then(value => setPhotos(value))
    }

    // =====================================PostsPage==========================================
    useEffect(() => {
        postService.getAll().then(value => setPosts(value))
    }, [])

    const getPostById = (id) => {
        postService.getById(id).then(value => setPost(value))
    }

    const getCommentsId = (id) => {
        commentService.getByPostId(id).then(value => setComments(value))
    }


    return (
      <>
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'users'} element={<UsersPage getUserId={getUserId} getAlbumById={getAlbumById}/>}>
                    <Route path={':id'} element={<UsersDetailsPage user={user} getPostById={getPostByUserId}/>}>
                        <Route path={'posts'} element={<UserPosts userPosts={userPosts}/>}/>
                    </Route>
                    <Route path={':id/albums'} element={<AlbumPage albums={albums} getIdForPhoto={getIdForPhoto} />}>
                        <Route path={'photo'} element={<Photos photos={photos} />  } />
                    </Route>
                </Route>

                <Route path={'posts'} element={<PostsPage posts={posts} getPostById={getPostById} />}>
                    <Route path={':id'} element={<PostDetails  post={post} getCommentsId={getCommentsId}/>}>
                        <Route path={'comments'} element={<Comments comments={comments} />}/>
                    </Route>
                </Route>
            </Route>
        </Routes>
      </>
  );
}

export default App;
