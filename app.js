const express = require('express');
const mongoose = require('Mongoose');
const Course = require('./models/course');
const dbURI = 'i changed this when testing with other databases and god told me to stop so i tried manual entry to test my code instead'

//activate express
const app = express();

//mongoose connect, currently commented out because my IP is not whitelisted
// mongoose.connect(dbURI)
//  .then((result)=> app.listen(3000))
//  .catch((err)=> console.log(err))

//connects regardless
app.listen(3000);
 
//for views
app.set('view engine', 'ejs');

 //middleware for the use of custom CSS
 app.use(express.static('public'));

 app.get('/', (req, res) =>{
    // Course.find().sort({createdAt: -1})
    // .then((result)=>{
    //     res.render('index', { title: 'Courses', courses: result});
    // })
    // .catch((err) =>{
    //     console.log(err);
    // });
    const courses = [
        {title: 'Intro to Biology', short: 'BIO101', instructor: 'Carborator Sam', description: 'lorem ipsum dolor sit amet whatever the hell comes next woo', id: 12, location: 'HF102'},
        {title: 'Study of Cosmotology', short: 'CFM110', instructor: 'Lubellion, I Think', description: 'lorem ipsum dolor sit amet whatever the hell comes next woo', id: 14, location: 'HF114'}
    ]
    res.render('index', { title: 'Courses', courses});
 })