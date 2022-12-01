'use strict'

const express = require("express");
const AuthController = require('../controllers/AuthController.js');
const validationHandler = require('./middlewares/validator.js');
const signUpValidation = require('./middlewares/Validations/signUpValidation.js');
const loginValidation = require('./middlewares/Validations/loginValidation.js');
const router = express.Router();
const user = new AuthController();

router
    .post('/login', loginValidation, validationHandler, user.login)
    .post('/signup', signUpValidation, validationHandler, user.signup)

module.exports = router;
