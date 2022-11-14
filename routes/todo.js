"use strict"

const express = require('express');
const listController = require('../controllers/ListController.js')
const bodyParser = require('body-parser');
const router = express.Router();

router
    .get('/', async (req, res) => {
        try {
            res.send(await listController.get());
        } catch (e) {
            res.status(500).send('Something went wrong!');
        }
    })
    .get('/:id', async (req, res) => {
        try {
            res.send(await listController.getById(req.params.id));
        } catch (e) {
            res.status(500).send('Something went wrong!');
        }
    })
    .put('/:id', async (req, res) => {
        try {
            res.send(await listController.update(req.body, req.params.id));
        } catch (e) {
            res.status(500).send('Something went wrong!');
        }
    })
    .delete('/:id', async (req, res) => {
        try {
            res.send(await listController.destroy(req.params.id));
        } catch (e) {
            res.status(500).send('Something went wrong!');
        }
    })
    .post('/create', async (req, res) => {
        const data = req.body;
        if (Object.keys(data).length === 0) {
            return res.status(404).send('error: empty body');
        }
        try {
            await listController.create(data)
            res.status(201).send('todo created');
        } catch (e) {
            res.status(500).send(e);
        }
    })

module.exports = router;