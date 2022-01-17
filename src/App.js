import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
  return (
      // <div className={'info'}>
      //   <div className={'usersAndPosts'}>
      //       <div className={'users'}>
      //
      //       </div>
      //
      //       <div className={'posts'}>
      //
      //       </div>
      //   </div>
      //
      //     <div className={'comments'}>
      //
      //     </div>
      // </div>
      <div className={'info'}>
        <div className={'commentWithPosts'}>
          <Users/>
          <Posts/>
        </div>
        <Comments/>
      </div>

  );
}

export default App;