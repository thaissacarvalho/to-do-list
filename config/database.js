const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/todo-list')
    .then(() => console.log('Conectando ao MongoDB'))
    .catch((err) => console.log(err))