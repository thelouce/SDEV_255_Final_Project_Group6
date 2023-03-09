const express = require('express');
const mongoose = require('mongoose');
const navRoutes = require('./routes/navRoutes');

//activate express
const app = express();

//mongoose connect, currently commented out because my IP is not whitelisted
const dbURI = 'mongodb+srv://lcncraft:test123@nodejs-tutorial.z2zzrmp.mongodb.net/test-tuts';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));
 
//for views
app.set('view engine', 'ejs');


 //middleware for the use of custom CSS
 app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

 app.use('/', navRoutes)