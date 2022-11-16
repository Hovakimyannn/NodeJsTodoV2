"use strict"

const DatabaseManager = require('../database/DatabaseManager.js');
const Todo = require('../models/todo.model.js');
const dataBaseManager = new DatabaseManager(Todo);

class ListController {
    async get(req, res) {
        try {
            res.json(await dataBaseManager.get());
        } catch (e) {
            console.log(e);
            res.status(500).json('Something went wrong!');
        }
    }

    async getById(req, res) {
        try {
            res.json(await dataBaseManager.getByCredentials({_id: req.params.id}));
        } catch (e) {
            res.status(500).json('Something went wrong!');
        }
    }

    async create(req, res) {
        const data = req.body;
        if (data.status === undefined) {
            data.status = false;
        }
        if (Object.keys(data).length === 0) {
            return res.status(404).json('error: empty body');
        }
        try {
            res.status(201).json(await dataBaseManager.create(data));
        } catch (e) {
            res.status(500).json('Something went wrong!');
        }
    }

    async update(req, res) {
        try {
            res.json(await dataBaseManager.update(req.body, req.params.id));
        } catch (e) {
            res.status(500).json('Something went wrong!');
        }
    }

    async destroy(req, res) {
        try {
            res.json(await dataBaseManager.destroy(req.params.id));
        } catch (e) {
            res.status(500).json('Something went wrong!');
        }
    }
}

module.exports = ListController;
