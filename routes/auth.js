'use strict'

const express = require("express");
const router = express.Router();
const UserController = require('../controllers/AuthController.js');
const user = new UserController();
const auth = require('./middlewares/Auth.js');

router
    .post('/login', user.login)
    .post('/signup', user.signup)
    .put('/logout', auth, user.logout)

module.exports = router;