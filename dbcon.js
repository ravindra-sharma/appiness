const mongo = require('mongodb').MongoClient;
const url = 'mongodb+srv://ravindra:admin@cluster0-gwjy8.mongodb.net';
const dbName = 'demo';

const insert = async function(obj, collection){
    const db = await mongo.connect(url);
    const dbo = db.db(dbName);
    const result = await dbo.collection(collection).insertOne(obj);
    return result;
}

const find = async function(query,collection){
    const db = await mongo.connect(url);
    const dbo = db.db(dbName);
    const result = await dbo.collection(collection).findOne(query);
    return result;
}

const findAll = async function(query,collection){
    const db = await mongo.connect(url);
    const dbo = db.db(dbName);
    const result = await dbo.collection(collection).find(query).toArray();
    return result;
}

const deleteAll = async function(query,collection){
    const db = await mongo.connect(url);
    const dbo = db.db(dbName);
    const result = await dbo.collection(collection).deleteMany(query);
    return result;
}
module.exports={
    insert,
    find,
    findAll,
    deleteAll
}