//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
         return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB Server');
    
    
    // db.collection('Todos').findOneAndUpdate({
    //   _id : new ObjectID('5bc6fbcec66f98c2d79cb468')
    // },
    // {
    //     $set : {
    //         text : 'Tsuraiyya Aghni'
    //     }
    // }, {
    //     returnOriginal : false
        
    // }).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 5));
        
    // })

    // db.collection('Todos').findOneAndUpdate({
    //     text : 'Tsuraiyya Aghni'
    //   },
    //   {
    //       $set : {
    //           text : 'Alnilam Tsuraiyya Pasha'
    //       }
    //   }, {
    //       returnOriginal : false
          
    //   }).then((result) => {
    //       console.log(JSON.stringify(result, undefined, 5));
          
    //   })

    db.collection('Users').findOneAndUpdate({
        location : 'Venus'
      },
      {
          $set : {
              location : 'Osiris'
          },
          $inc : {
              age : 5
          }
      }, {
          returnOriginal : false
          
      }).then((result) => {
          console.log(result);
          
      })

    db.close();


})