'use strict'

const dotenv = require('dotenv');
dotenv.config();
const DB_CONNECTION_NAME = 'mongoose';
const DB_DATABASE = require(DB_CONNECTION_NAME);
const URI = process.env.MONGO_CLIENT_URI;


module.exports = {
    URI,
    DB_CONNECTION_NAME,
    DB_DATABASE,
}
