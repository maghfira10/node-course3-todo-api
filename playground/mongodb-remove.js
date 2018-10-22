const {ObjectID} = require ('mongodb');

const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');
const {User} = require ('./../server/models/user');

Todo.remove({}).then((result) => {
    console.log(result);
    
});

Todo.findOneAndRemove({
    text : 'Mentari'
}).then((todo) => {
    console.log(JSON.stringify(todo), undefined, 2);
    
});

Todo.findByIdAndRemove('5bc9a083339d731a20cceb55').then((todo) =>{
console.log(todo);

});