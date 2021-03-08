
const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const TweetPostSchema = new Schema({
  displayName: String,
  username: String,
  verified: Boolean,
  text: String,
  avatar: String,
  image: String
})
const TweetPost = mongoose.model('TweetPost',TweetPostSchema);



module.exports =  TweetPost;