"use strict"

const config = require('../../config/config.js');
const ObjectId = config.ObjectId;
const MongoClient = config.MongoClient;

/**
 * @param data
 *
 * @returns {Promise<boolean>}
 */
async function create(data) {
    const client = new MongoClient(config.uri);
    try {
        const database = client.db(config.databaseName);
        const collection = database.collection(config.collectionName);
        await collection.insertOne(data);
        return true;
    } catch (e) {
        throw e;
    } finally {
        await client.close();
    }
}

/**
 * @param id
 *
 * @returns {Promise<string|*>}
 */
async function read(id = null) {
    const client = new MongoClient(config.uri);
    try {
        const database = client.db(config.databaseName);
        const collection = database.collection(config.collectionName);
        if ((await collection.count()) === 0) {
            return 'No documents found!';
        }
        if (id) {
            try {
                return await collection.findOne({_id: new ObjectId(id)});
            } catch (e) {
                return 'not found';
            }
        } else {
            return await collection.find().toArray();
        }
    } catch (e) {
        throw e;
    } finally {
        await client.close();
    }
}

/**
 * @param data
 * @param id
 *
 * @returns {Promise<*>}
 */
async function update(data, id) {
    const client = new MongoClient(config.uri);
    try {
        const database = client.db(config.databaseName);
        const collection = database.collection(config.collectionName);

        const query = {_id: new ObjectId(id)};

        const replacement = {
            $set: data
        };

        return await collection.updateOne(query, replacement, {upsert: true});
    } catch (e) {
        throw e;
    }

}

/**
 * @param id
 *
 * @returns {Promise<void>}
 */
async function destroy(id) {
    const client = new MongoClient(config.uri);
    try {
        const database = client.db(config.databaseName);
        const collection = database.collection(config.collectionName);
        await collection.deleteOne({_id: new ObjectId(id)});
    } catch (e) {
        throw e;
    }
}

module.exports = {
    create,
    read,
    update,
    destroy
}