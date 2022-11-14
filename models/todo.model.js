"use strict"

const config = require('../config/config.js');
const db = config.db;
const {Schema} = db.Schema;

const todoSchema = new Schema({
    todoContent: {
        type: String,
        required: true,
        trim: true,
        minLength: 2
    },
    todoStatus: {
        type: Boolean,
        default:false
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;