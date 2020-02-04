//MONGODB PW = 6vdCnxdNGKTtD1xX
//MONGODB CONNECTion = mongodb+srv://fourat:<password>@nodejs-i0chz.mongodb.net/test?retryWrites=true&w=majority

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://fourat:6vdCnxdNGKTtD1xX@nodejs-i0chz.mongodb.net/test?retryWrites=true&w=majority',{ useUnifiedTopology: true , useNewUrlParser: true })
.then(
    ()=>{
        console.log('connected successfully');
    }
).catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

  const Thing = require('./models/thing');


/* CORS Setup*/
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
app.use(bodyParser.json());
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const path = require('path');



app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));


module.exports = app;