"use strict"

const express = require('express');
const listController = require('./controllers/ListController.js')
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());

app.get('/list', async (req, res) => {
    try {
        res.send(await listController.get());
    } catch (e) {
        res.status(500).send('Something went wrong!');
    }
})

app.get('/list/:id', async (req, res) => {
    try {
        res.send(await listController.getById(req.params.id));
    } catch (e) {
        res.status(500).send('Something went wrong!');
    }
})

app.put('/list/:id', async (req, res) => {
    try {
        res.send(await listController.update(req.body, req.params.id));
    } catch (e) {
        res.status(500).send('Something went wrong!');
    }

})

app.delete('/list/:id', async (req, res) => {
    try {
        res.send(await listController.destroy(req.params.id));
    } catch (e) {
        res.status(500).send('Something went wrong!');
    }

})

app.post('/list/create', async (req, res) => {
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

app.listen(port, () => console.log(`App running on port ${port}`));