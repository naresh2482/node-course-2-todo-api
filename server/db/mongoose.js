
var mongoose = require('mongoose');

//const MONGODB_URI = 'mongodb://naresh2482:naresh24@ds247007.mlab.com:47007/naresh-test';

mongoose.Promise = global.Promise;

// var options = {
//     user: "naresh2482",
//     pass: "naresh24"
//     db: "naresh-test",
//     roles: [
//         {
//             "role": "dbOwner",
//             "db": "naresh-test"
//         }
//     ]
// };

//mongoose.connect(MONGODB_URI); //|| 'mongodb://localhost:27017/TodoApp');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
