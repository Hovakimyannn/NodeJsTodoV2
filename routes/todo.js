"use strict"

const express = require('express');
const listController = require('../controllers/ListController.js');
const validationHandler = require('./middlewares/validator.js');
const todoValidation = require('./middlewares/Validations/todoValidation.js');
const router = express.Router();
const list = new listController();


router.get('/', list.get)
    .get('/:id', list.getById)
    .put('/:id', todoValidation, validationHandler, list.update)
    .delete('/:id', list.destroy)
    .post('/create', todoValidation, validationHandler, list.create)

module.exports = router;
