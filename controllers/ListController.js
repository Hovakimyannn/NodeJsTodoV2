"use strict"

const DatabaseManager = require('../database/DatabaseManager.js');
const Todo = require('../models/todo.model.js');
const dataBaseManager = new DatabaseManager(Todo);

class ListController {
    async get(req, res) {
        try {
            res.json(await dataBaseManager.getByCredentials(
                {
                    user_id: req.user.userId
                }
            ));
        } catch (e) {
            res.status(500).json('Something went wrong!');
        }
    }

    async getById(req, res) {
        try {
            res.json(await dataBaseManager.getByCredentials(
                {
                    _id: req.params.id,
                    user_id: req.user.userId
                }
            ));
        } catch (e) {
            res.status(500).json('Something went wrong!');
        }
    }

    async create(req, res) {
        let data = req.body;
        data['user_id'] = req.user.userId;
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
            res.json(await dataBaseManager.update(
                req.body,
                {
                    _id: req.params.id,
                    user_id: req.user.userId
                }
            ));
        } catch (e) {
            res.status(500).json('Something went wrong!');
        }
    }

    async destroy(req, res) {
        try {
            res.json(await dataBaseManager.destroy(
                {
                    _id: req.params.id,
                    user_id: req.user.userId
                }
            ));
        } catch (e) {
            res.status(500).json('Something went wrong!');
        }
    }
}

module.exports = ListController;
