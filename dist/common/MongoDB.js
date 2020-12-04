"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
/*Wrapper class for accessing Mongo Database*/
class Database {
    // constructor
    // url: the connection url for the mongo server
    // dbName: the name of the database to access
    constructor(url, dbName) {
        this.url = url;
        this.dbName = dbName;
    }
    // converts a string to a mongodb object id
    static stringToId(id) {
        return new mongodb_1.ObjectID(id);
    }
    // addRecord
    // collection: the name of the collection to add the record to.
    // object: a javascript object to store in the collection
    // returns a promise to an array of records
    addRecord(collection, object) {
        const dbname = this.dbName;
        const url = this.url;
        return new Promise(function (resolve, reject) {
            mongodb_1.MongoClient.connect(url, function (err, db) {
                if (err) {
                    reject(err);
                }
                const dbo = db.db(dbname);
                dbo.collection(collection).insertOne(object, (error, result) => {
                    if (error) {
                        reject(error);
                    }
                    db.close();
                    resolve(true);
                });
            });
        });
    }
    // updateRecord
    // collection: the name of the collection to update the record to.
    // object: a javascript object to store in the collection
    // returns a promise to a boolean indicating success
    updateRecord(collection, filter, update) {
        const dbname = this.dbName;
        const url = this.url;
        return new Promise(function (resolve, reject) {
            mongodb_1.MongoClient.connect(url, function (err, db) {
                if (err) {
                    reject(err);
                }
                const dbo = db.db(dbname);
                dbo.collection(collection).updateOne(filter, update, (error, result) => {
                    if (error) {
                        reject(error);
                    }
                    db.close();
                    resolve(result.matchedCount === 1);
                });
            });
        });
    }
    // getRecords
    // collection: the name of the collection to get from.
    // query: a mongo query object
    // returns a promise to an array of records
    getRecords(collection, query = {}) {
        const dbname = this.dbName;
        const url = this.url;
        return new Promise(function (resolve, reject) {
            mongodb_1.MongoClient.connect(url, function (err, db) {
                if (err) {
                    reject(err);
                }
                const dbo = db.db(dbname);
                dbo.collection(collection).find(query).toArray((error, result) => {
                    if (error) {
                        reject(error);
                    }
                    db.close();
                    resolve(result);
                });
            });
        });
    }
    // getOneRecords
    // collection: the name of the collection to get from.
    // query: a mongo query object
    // returns a promise to a single records
    getOneRecord(collection, query = {}) {
        const dbname = this.dbName;
        const url = this.url;
        return new Promise(function (resolve, reject) {
            mongodb_1.MongoClient.connect(url, function (err, db) {
                if (err) {
                    reject(err);
                }
                const dbo = db.db(dbname);
                dbo.collection(collection).findOne(query, (error, result) => {
                    if (error) {
                        reject(error);
                    }
                    db.close();
                    resolve(result);
                });
            });
        });
    }
    // deleteRecord
    // collection: the name of the collection to get from.
    // query: a mongo query object
    // returns a promise to a boolean indicating success
    deleteRecord(collection, query = {}) {
        const dbname = this.dbName;
        const url = this.url;
        return new Promise(function (resolve, reject) {
            mongodb_1.MongoClient.connect(url, function (err, db) {
                if (err) {
                    reject(err);
                }
                const dbo = db.db(dbname);
                dbo.collection(collection).deleteOne(query, (error, result) => {
                    if (error) {
                        reject(error);
                    }
                    db.close();
                    resolve(result.deletedCount === 1);
                });
            });
        });
    }
}
exports.Database = Database;
//# sourceMappingURL=MongoDB.js.map