"use strict"

const dataBaseManager = require('../database/DatabaseManager.js');

async function get() {
    try {
        return await dataBaseManager.getList();
    } catch (e) {
        throw e;
    }
}

async function getById(id) {
    try {
        return await dataBaseManager.getListById(id);
    } catch (e) {
        console.log('list controller getById')
        throw e;
    }
}

async function create(data) {
    try {
        if (data.status === undefined) {
            data.status = false;
        }
        return await dataBaseManager.createList(data);
    } catch (e) {
        throw e;
    }
}

async function update(data, id) {
    try {
        return await dataBaseManager.updateList(data, id);
    } catch (e) {
        throw e;
    }
}

async function destroy(id) {
    try {
        return await dataBaseManager.destroyList(id);
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