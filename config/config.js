'use strict'

const DB_CONNECTION_NAME = 'mongoose';
const DB_DATABASE = require(DB_CONNECTION_NAME);
const URI = "mongodb+srv://hovakimyannn:hovakimyannn@cluster0.2j1uvna.mongodb.net/todo?retryWrites=true&w=majority";

module.exports = {
    URI,
    DB_CONNECTION_NAME,
    DB_DATABASE,
}
