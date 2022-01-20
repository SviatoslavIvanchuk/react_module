import {Routes, Route, Link} from "react-router-dom";

import css from  './App.module.css';
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";

function App() {
  return (
      <div>
        <div className={css.header}>
            <Link to='/Users'>Users</Link>
            <Link to='/Posts'>Posts</Link>
        </div>
        <Routes>
          <Route path={'/users'} element={<UsersPage/>} />
          <Route path={'/posts'} element={<PostsPage/>} />
        </Routes>
      </div>
  );
}

export default App;
