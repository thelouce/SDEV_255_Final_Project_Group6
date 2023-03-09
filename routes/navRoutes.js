const { Router } = require('express');
const navController = require('../controllers/navControllers')

//setting up a router
const router = Router();

router.get('/', navController.courses_index);

router.get('/course', navController.courses_index);
router.post('/course', navController.instructor_post);

router.get('/instructor', navController.instructor_index);

router.get('/login', navController.login_index);
router.post('/login', navController.login_post);

router.get('/logout', navController.logout_index);

router.get('/student', navController.student_index);

router.get('/signup', navController.signup_index);
router.post('/signup', navController.signup_post);

module.exports = router;