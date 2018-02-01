//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDb server...');

  // db.collection('Todos').insertOne({
  //   'text': 'something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert Todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   'name': 'Naresh',
  //   'age': 32,
  //   'location': 'Thane'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  db.collection('Todos').find({_id: new ObjectID('5a7325f0d13b870c78392983')}).toArray().then((docs)=> {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Todos', err);
  });

  db.collection('Todos').find({_id: new ObjectID('5a7325f0d13b870c78392983')}).count((err,count)=> {
    if (err) {
      return console.log('Error in Count:', err);
    }
    console.log('Todos');
    console.log(JSON.stringify(count, undefined, 2));
  });

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count ${count}`);
  }, (err) => {
    console.log('Unable to count documents:', err);
  });

  //db.close();
});
