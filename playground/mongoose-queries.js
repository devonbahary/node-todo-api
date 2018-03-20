const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// const id = '5ab02bab4fe8d190426431c8';

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos', todo);
// });
//
// Todo.findById(id).then((todo) => {
//     console.log('Todo by Id', todo);
// });


const id = '5aaf3aa29208553839fbc62a';
User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found.');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
