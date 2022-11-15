'use strict'

const Database = require('../database/MongoDB/Mongodb.js');
const config = require("../config/config");

class DatabaseManager {
    constructor(model) {
        this.database = new Database(model);
    }

    static connect() {
        config.DB_DATABASE.connect(config.URI);
        const db = config.DB_DATABASE.connection;
        db.on("error", console.error.bind(console, `${config.DB_CONNECTION_NAME} connection error: `));
        db.once("open", function () {
            console.log(`${config.DB_CONNECTION_NAME} connected successfully`);
        });
    }

    async get() {
        try {
            return await this.database.read();
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    async getByCredentials(credentials) {
        try {
            return await this.database.read(credentials);
        } catch (e) {
            throw e;
        }
    }

    async create(data) {
        try {
            return await this.database.create(data);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    async update(data, id) {
        try {
            return await this.database.update(data, id);
        } catch (e) {
            throw e;
        }
    }

    async destroy(id) {
        try {
            return await this.database.destroy(id);
        } catch (e) {
            throw e;
        }
    }
}

module.exports = DatabaseManager