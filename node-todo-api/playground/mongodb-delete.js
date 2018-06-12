/*jshint esversion: 6 */

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: "Kyle Archer"}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5b1e8e2445ea716f9c3c691f")}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });
    // client.close();
});