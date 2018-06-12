/*jshint esversion: 6 */

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5b1e95a9d7f42abd70aff9d2")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOrigional: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5b1fe11e9710c32a8a5e3832")
    }, {
        $set: {
            name: "carl"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOrigional: false
    }).then((result) => {
        console.log(result);
    });

    // client.close();
});