"use strict"

const {
    create,
    read,
    update,
    destroy
} = require('../database/MongoDB/Mongodb.js');

async function getList() {
    try {
        return await read();
    } catch (e) {
        throw e;
    }
}

async function getListById(id) {
    try {
        return await read(id);
    } catch (e) {
        throw e;
    }
}

async function createList(data) {
    try {
        return await create(data);
    } catch (e) {
        throw e;
    }
}

async function updateList(data, id) {
    try {
        return await update(data, id);
    } catch (e) {
        throw e;
    }
}

async function destroyList(id) {
    try {
        return await destroy(id);
    } catch (e) {
        throw e;
    }
}

module.exports = {
    getList,
    getListById,
    createList,
    updateList,
    destroyList
}