"use strict"

const express = require('express');
const listController = require('../controllers/ListController.js')
const router = express.Router();
const list = new listController();

router.get('/', list.get)
    .get('/:id', list.getById)
    .put('/:id', list.update)
    .delete('/:id', list.destroy)
    .post('/create', list.create)

module.exports = router;
