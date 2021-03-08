const express = require('express');

const router = express.Router();

const TweetPost = require('../models/TweetPost');


// Routes
router.get('/', (req, res) => {
 //res.send("hello");
    TweetPost.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            //console.log('error: ', daerrorta);
            console.log('err');
        });
});

router.post('/save', (req, res) => {
    const data = req.body;
    
    const newTweetPost = new TweetPost(data);
    
    newTweetPost.save((error) =>{
      if(error) console.log("Some err");
      else console.log("Successfully saved data"); 
    }); 
    
});


router.get('/name', (req, res) => {
    const data =  {
        username: 'peterson',
        age: 5
    };
    res.json(data);
});
module.exports = router;
