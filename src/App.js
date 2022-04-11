import { useEffect, useState } from "react";
import "./App.css";
import Post from "./Post";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([]);

  // useEffect fires on a condition
  useEffect(() => {
    //where code runs
    db.collection("posts").onSnapshot((snapshot) => {
      //everytime new post is added , this code fires  className={classes.paper}
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-700x394.png"
          alt=""
          className="app__headerImage"
        />
      </div>
      <h1>Hello there, Insta coming soon</h1>

      {posts.map(({ post, id }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
