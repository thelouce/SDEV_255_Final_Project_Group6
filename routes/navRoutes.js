const { Router } = require('express');
const navController = require('../controllers/navControllers')
const { requireAuth, requireAuthInstructor } = require('../middleware/authMiddleware');

//setting up a router
const router = Router();

router.get('/', navController.courses_index);

router.get('/course', navController.courses_index);
router.post('/course', navController.instructor_post);

router.get('/instructor', requireAuthInstructor, navController.instructor_index);

router.get('/unauth', navController.unauth_index);

router.get('/login', navController.login_index);
router.post('/login', navController.login_post);

router.get('/logout', navController.logout_get);

router.get('/student', requireAuth, navController.student_index);

router.get('/signup', navController.signup_index);
router.post('/signup', navController.signup_post);

module.exports = router;