"use strict"

const {body} = require("express-validator");

const signUpValidation = [
    body("firstName")
        .exists({checkFalsy: true})
        .withMessage("First name is required")
        .isString()
        .withMessage("First name should be string"),

    body("lastName")
        .exists({checkFalsy: true})
        .withMessage("Last name is required")
        .isString()
        .withMessage("Last name should be string"),

    body("password")
        .exists()
        .withMessage("Password is required")
        .isString()
        .withMessage("Password should be string")
        .isLength({min: 5})
        .withMessage("Password should be at least 5 characters"),

    body("email")
        .isEmail()
        .withMessage("Provide valid email"),
];

module.exports = signUpValidation