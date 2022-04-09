import { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Pankhuri",
      caption: "New to this",
      imageUrl:
        "https://images.pexels.com/photos/92933/pexels-photo-92933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      username: "Nikhil",
      caption: "PRO",
      imageUrl:
        "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      username: "Niti",
      caption: "View OP",
      imageUrl:
        "https://images.pexels.com/photos/358238/pexels-photo-358238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);
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

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
      {/* <Post
        username="Pankhuri"
        caption="New to this"
        imageUrl="https://images.pexels.com/photos/92933/pexels-photo-92933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Post
        username="Nikhil"
        caption="PRO"
        imageUrl="https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Post
        username="Niti"
        caption="View OP"
        imageUrl="https://images.pexels.com/photos/358238/pexels-photo-358238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      /> */}
    </div>
  );
}

export default App;
