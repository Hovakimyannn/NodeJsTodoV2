"use strict"

const dataBaseManager = require('../database/DatabaseManager.js');

async function get(req, res) {
    try {
        res.json(await dataBaseManager.get());
    } catch (e) {
        res.status(500).json('Something went wrong!');
    }
}

async function getById(req, res) {
    try {
        res.json(await dataBaseManager.getById(req.params.id));
    } catch (e) {
        res.status(500).json('Something went wrong!');
    }
}

async function create(req, res) {
    const data = req.body;
    if (data.status === undefined) {
        data.status = false;
    }
    if (Object.keys(data).length === 0) {
        return res.status(404).json('error: empty body');
    }
    try {
        await dataBaseManager.create(data)
        res.status(201).json('todo created');
    } catch (e) {
        res.status(500).json('Something went wrong!');
    }
}

async function update(req, res) {
    try {
        res.json(await dataBaseManager.update(req.body, req.params.id));
    } catch (e) {
        res.status(500).json('Something went wrong!');
    }
}

async function destroy(req, res) {
    try {
        res.json(await dataBaseManager.destroy(req.params.id));
    } catch (e) {
        res.status(500).json('Something went wrong!');
    }
}

module.exports = {
    get,
    getById,
    create,
    update,
    destroy
}