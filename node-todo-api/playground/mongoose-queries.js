const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

var id = '5b213e728f9c19028a9dba0e';

// Todo.find({
//     _id: id 
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id 
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     console.log('Todo By Id', todo);
// });

User.findById(id).then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }

    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});