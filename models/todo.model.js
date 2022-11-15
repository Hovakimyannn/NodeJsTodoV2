"use strict"

const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
        todo: {
            type: String,
            required: true,
            trim: true,
            minLength: 2
        },
        status: {
            type: Boolean,
            default: false
        },
        user_id: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Todo = mongoose.model('Todo', todoSchema, 'list');

module.exports = Todo;
