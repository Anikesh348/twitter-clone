const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000; 

const routes = require('./routes/api');


//test123
const MONGODB_URI = '';
const MONGO_LOCACL = 'mongodb://localhost/twitter-clone';
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(MONGODB_URI  , {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', (eror) => {
  if(eror) console.log('errrr');
  else 
    console.log('Mongoose is conncted!!!!');
});



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Serve if in heroku production status
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}


 app.use(morgan('tiny'));
 app.use('/api', routes);




app.listen(PORT, console.log(`Server is starting at ${PORT}`));
