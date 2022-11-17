'use strict'

const {body} = require("express-validator");

const todoValidation = [
    body("todo")
        .isString().withMessage('Status should be string')
        .isLength({min: 1, max: 1000})
        .withMessage("Todo should be at least 1 characters to the limit 1000"),

    body("status")
        .optional()
        .isBoolean()
        .withMessage("status should be boolean")
];

module.exports = todoValidation