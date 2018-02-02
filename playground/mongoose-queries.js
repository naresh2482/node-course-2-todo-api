const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '5a73f902007e30d81c56dd5611';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id is not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) =>{
//   console.log(todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log(todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log(`ID ${id} not found`);
//   }
//   console.log('Todo by Id',todo);
// }).catch((e) => console.log(e));

var id = '5a735478a2c0eaa820869ad2';

User.findById(id).then((user) => {
  if (!user) {
    return console.log(`User not found by Id ${id}`);
  }

  console.log('User found:', user);
}).catch((e) => console.log(e));
