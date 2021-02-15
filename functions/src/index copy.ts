const functions = require('firebase-functions');
const app = require('express')();
const cors = require('cors');


// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

const {getAllTodos,postOneTodo, deleteTodo, editTodo} = require('../APIs/todos');
const {loginUser} = require('../APIs/users');


app.get('/todos', getAllTodos);
app.post('/todo', postOneTodo);
app.delete('/todo/:todoId', deleteTodo);
app.put('/todo/:todoId', editTodo);

//user
app.post('/login', loginUser);

exports.api = functions.https.onRequest(app);