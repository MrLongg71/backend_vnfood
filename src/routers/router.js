const express = require('express');
const router = express.Router();
const {register} = require('../controllers/UserController');
const {UserValidator} = require('../validators/validator');

router.post('/register', register);

module.exports = router;
