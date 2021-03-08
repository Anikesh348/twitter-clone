import React, {useState, useEffect} from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import db from "./firebase";
//import {data} from "./data.js"
import FlipMove from "react-flip-move";
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
  },[]);
  return (<div className="feed">
    <div className="feed__header">
      <h2>Home</h2>
    </div>

    <TweetBox/>
    <FlipMove>
      {posts.slice(0).reverse().map((post) => (<Post key={post.key} displayName={post.displayName} username={post.username} verified={post.verified} text={post.text} avatar={post.avatar} image={post.image}/>))}
    </FlipMove>
  </div>);
}

export default Feed;
