const jwt = require('jsonwebtoken');
const User = require('../models/User');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, 'radiator springs secret code just special for this project', (err, decodedToken) => {
            if (err) {
                res.redirect('/login');
            } else {
                next();
            }
        })
    } else {
        res.redirect('/login');
    }
    next();
}

const requireAuthInstructor = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, 'radiator springs secret code just special for this project', async (err, decodedToken) => {
            if (err) {
                res.redirect('/unauth');
            } else {
                let user = await User.findById(decodedToken.id);
                if (user.userGroup === "Instructor"){
                    next();
                }
                else {
                    res.redirect('/unauth');
                }
            }
        })
    } else {
        res.redirect('/unauth');
    }
    next();
}


//check current user
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, 'radiator springs secret code just special for this project', async (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.locals.user = null;
                next();
            } else {
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        })
    } else {
        res.locals.user = null;
        next();
    }
}

module.exports = { requireAuth, checkUser, requireAuthInstructor }