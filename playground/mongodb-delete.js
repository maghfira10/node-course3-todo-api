//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
         return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB Server');
    
    //deleteMany
    // db.collection('Todos').deleteMany({
    //     text : 'Hallo Pagi'
    //    }).then((result) => {
    //     console.log(result);
        
    // })
    //deleteOne
    // db.collection('Todos').deleteOne({
    //     completed: false
    //    }).then((result) => {
    //     console.log(result);
        
    // })
    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({
        completed : 'Bersinar Cerah'
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 5));
        
    })
    db.close();


})