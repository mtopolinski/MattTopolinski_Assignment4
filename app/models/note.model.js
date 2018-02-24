var mongoose = require('mongoose');

var NoteSchema = mongoose.Schema({
    username: String,
    //content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);