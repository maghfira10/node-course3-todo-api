//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
         return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB Server');
    
    // db.collection('Todos').find({
    //     completed : 'true'
    // }).toArray().then((masukKeWeb) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(masukKeWeb, undefined , 2)); // masukKeWeb (nilai), undefined (replacer), 2(Spasi untuk hasil string)
    // }, (err) => {

    //     console.log('Unable to fetch todos', err);
    // });

 db.collection('Todos').find().count().then((hitungIsiDB) => {
        console.log(`Todos count : ${hitungIsiDB}`);
       
    }, (err) => {

        console.log('Unable to fetch todos', err);
    });
    db.close();
});