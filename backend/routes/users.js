const express = require('express');
const router = express.Router();
const userRegisterController = require('../controllers/userRegisterController');

router.post('/register', userRegisterController.register);

module.exports = router;
