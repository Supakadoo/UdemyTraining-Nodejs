/*jshint esversion: 6 */

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: 'Feed the cat',
    completed: true,
    completedAt: 123
});

newTodo.save().then((doc) => {
    console.log('Save doc', doc);
}, (e) => {
    console.log('Unable to save todo');
});