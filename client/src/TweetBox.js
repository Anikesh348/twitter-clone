import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
// import db from "./firebase";
import axios from 'axios'
function TweetBox() {
  var c=0;
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    
    e.preventDefault();
    const post = {
      displayName: "Anikesh Thakur",
      username: "anikesh",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://avatars.githubusercontent.com/u/44468436?s=460&amp;u=66dd918ab9103cbbdd68b76ee87b4d25c5d506f9&amp;v=4"
    };
    //console.log(post);
    axios({
      url: '/api/save',
      method: 'POST',
      data: post
    })
      .then(() => {
        //alert("data send");
        console.log('Data has been sent to the server');
      })
      .catch(() => {
        //alert("data not send");
        console.log('Internal server error');
      })
 
    
    setTweetMessage("");
    setTweetImage("");
    //window.location.reload();
  };

  return (
  
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://avatars.githubusercontent.com/u/44468436?s=460&amp;u=66dd918ab9103cbbdd68b76ee87b4d25c5d506f9&amp;v=4" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)
            }
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Drop the image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
