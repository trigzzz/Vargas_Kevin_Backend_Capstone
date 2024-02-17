const express = require('express');
const router = express.Router();
const { register, login, getUserProfile } = require('../controllers/usersController');
const auth = require('../middleware/auth');


router.post('/register', register);
router.post('/login', login);
router.get('/profile', auth, getUserProfile); // `auth` middleware to verify token

module.exports = router;
