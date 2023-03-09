const Course = require('../models/Course');

const courses_index = (req, res) => {
    Course.find().sort({createdAt: -1})
        .then((result)=>{
            res.render('index', { title: 'All Course', courses: result});
        })
        .catch((err) =>{
            console.log(err);
        });
};

const instructor_index = (req, res) =>{
    res.render('instructor', { title: 'Add a Course'});
};

const instructor_post = (req, res) =>{
    console.log('placeholder while we post to this website');
    res.redirect('/');
};

const login_index = (req, res) =>{
    res.render('login', { title: 'Log In'});
};

const login_post = (req, res) =>{
    console.log('placeholder while we post to this website');
    res.redirect('/');
};

const logout_index = (req, res) =>{
    res.render('logout', { title: 'Logging Out'});
};

const student_index = (req, res) =>{
    res.render('student', { title: 'Manage Your Schedule'});
};

const signup_index = (req, res) =>{
    res.render('signup', { title: 'Sign Up For The Site'});
};

const signup_post = (req, res) =>{
    console.log('placeholder while we post to this website');
    res.redirect('/');
};

module.exports = {
    courses_index,
    instructor_index,
    instructor_post,
    login_index,
    login_post,
    logout_index,
    student_index,
    signup_index,
    signup_post
};