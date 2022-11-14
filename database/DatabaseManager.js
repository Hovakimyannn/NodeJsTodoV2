"use strict"

const db = require('../database/MongoDB/Mongodb.js');



async function get() {
    try {
        return await db.read();
    } catch (e) {
        throw e;
    }
}

async function getById(id) {
    try {
        return await db.read(id);
    } catch (e) {
        throw e;
    }
}

async function create(data) {
    try {
        return await db.create(data);
    } catch (e) {
        throw e;
    }
}

async function update(data, id) {
    try {
        return await db.update(data, id);
    } catch (e) {
        throw e;
    }
}

async function destroy(id) {
    try {
        return await db.destroy(id);
    } catch (e) {
        throw e;
    }
}

module.exports = {
    get,
    getById,
    create,
    update,
    destroy
}