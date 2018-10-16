//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

var obj = new ObjectID();
console.log(obj);

// let user = { 
//     name : 'Bintang Api',
//     age : 22
// };
// let {name} = user;
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
         return console.log('Unable to connect to MongoDB server');
    }
        console.log('Connected to MongoDB Server');
        
});