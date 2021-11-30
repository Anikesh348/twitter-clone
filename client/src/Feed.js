import React, {useState, useEffect} from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import axios from 'axios';
function Feed() {
  const [posts, setPosts] = useState([]);
   //console.log(posts);
  useEffect(() => {
    axios.get('/api')
     .then((response) => {
       const data = response.data;
       setPosts(data);
       console.log('Data has been received!!');
     })
     .catch(() => {
       alert('Error retrieving data!!!');
     });
  });
  return (<div className="feed">
    <div className="feed__header">
      <h2>Home</h2>
    </div>

    <TweetBox/>
      {posts.slice(0).reverse().map((post) => (<Post key={post.key} displayName={post.displayName} username={post.username} verified={post.verified} text={post.text} avatar={post.avatar} image={post.image}/>))}
  </div>);
}

export default Feed;
