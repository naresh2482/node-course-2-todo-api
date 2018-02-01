//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDb server...');

  //findOneAndUpdate
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5a733df8d13b870c7839311f')
  },
  {
      $set: {
        completed: false
      }
  },
  {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndUpdate({
    //_id: new ObjectID('5a7323d5bd6ae72af4971d07')
    _id: new ObjectID('5a7323d5bd6ae72af4971d07')
  },
  {
      $set: {
        name: "Naresh"
      },
      $inc: {
        age: 1
      }
  },
  {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  //db.close();
});
