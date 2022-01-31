import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import CarsPage from "./Pages/Cars/CarsPage";
import UsersPage from "./Pages/Users/UsersPage";
import PostsPage from "./Pages/Posts/PostsPage";
import CommentsPage from "./Pages/Comments/CommentsPage";


function App() {
  return (
    <>
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'cars'} element={<CarsPage/>} />
                <Route path={'users'} element={<UsersPage/>} />
                <Route path={'posts'} element={<PostsPage/>} />
                <Route path={'comments'} element={<CommentsPage/>} />
            </Route>
        </Routes>
    </>
  );
}

export default App;
