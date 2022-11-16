"use strict"

const fs = require('fs').promises;
const uuid = require('uuid');

async function read(filePath) {
    try {
        return fs.readFile(
            filePath,
            {encoding: 'utf8', flag: 'r'}
        );
    } catch (e) {
        throw e;
    }
}

async function write(filePath, data) {
    try {
        let text = await read(filePath)
        let allData = JSON.parse(text || '{}');
        data = {
            ...allData,
            [uuid.v1()]: {
                ...data
            }
        }
        return await fs.writeFile(filePath, JSON.stringify(data, null, 2))
    } catch (e) {
        throw e;
    }
}

module.exports = {
    read,
    write
}
