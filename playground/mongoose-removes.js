const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

//remove() deletes multiple records and does not return removed docs
// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

//findOneAndRemove() remove topmost one records and returns it
// Todo.findOneAndRemove()

//work same as findOneAndRemove
Todo.findByIdAndRemove('5a74351b3948bf091c02d6a6').then((removedTodo) => {
  console.log(removedTodo);
});
