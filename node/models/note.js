mongoose = require('mongoose');
/* Usaremos un modelo 'note' con tres campos strings */
var noteSchema = new mongoose.Schema({
    title: 'string',
    content: 'string',
    author: 'string'
});

module.exports = mongoose.model('note',noteSchema);