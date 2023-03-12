const Course = require('../models/Course');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '', displayName: '', userGroup: '' };

    //duplicate error code
    if (err.code === 11000) {
        errors.email = 'that email is already registered';
        return errors;
    }

    //validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, 'radiator springs secret code just special for this project', {
        expiresIn: maxAge
    });
}

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

const instructor_post = async (req, res) =>{
    const course = new Course(req.body);
    const token = req.cookies.jwt;

    jwt.verify(token, 'radiator springs secret code just special for this project', async (err, decodedToken) => {
        if (err) {
            console.log(err.message);
        } else {
            let user = await User.findById(decodedToken.id);
            course.instructorID = user._id;
            course.instructor = user.displayName;
        }
        course.save()
            .then((result) => res.redirect('/'))
            .catch((err) => console.log(err));
    })
};

const login_index = (req, res) =>{
    res.render('login', { title: 'Log In'});
};

const login_post = async (req, res) =>{
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000});
        res.status(200).json({ user: user._id });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};

const student_index = (req, res) =>{
    res.render('student', { title: 'Manage Your Schedule'});
};

const unauth_index = (req, res) =>{
    res.render('unauth', { title: 'No Access'});
};

const signup_index = (req, res) =>{
    res.render('signup', { title: 'Sign Up For The Site'});
};

const signup_post = async (req, res) =>{
    const { email, password, displayName, userGroup } = req.body;

    try {
        const user = await User.create({ email, password, displayName, userGroup });
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000});
        res.status(201).json({ user: user._id });
    }
    catch(err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};

logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
}

module.exports = {
    courses_index,
    instructor_index,
    instructor_post,
    login_index,
    login_post,
    student_index,
    signup_index,
    signup_post,
    logout_get,
    unauth_index
};