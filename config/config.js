"use strict"

const db = 'mongodb';
const {MongoClient, ObjectId} = require(db);
const uri = "mongodb+srv://hovakimyannn:hovakimyannn@cluster0. .mongodb.net/?retryWrites=true&w=majority";
const databaseName = 'todo';
const collectionName = 'list';

module.exports = {
    uri,
    MongoClient,
    ObjectId,
    db,
    databaseName,
    collectionName
}
