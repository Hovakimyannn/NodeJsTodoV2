"use strict"

const express = require('express');
const listController = require('../controllers/ListController.js')
const bodyParser = require('body-parser');
const router = express.Router();


router.get('/', listController.get)
    .get('/:id', listController.getById)
    .put('/:id', listController.update)
    .delete('/:id', listController.destroy)
    .post('/create', listController.create)

module.exports = router;