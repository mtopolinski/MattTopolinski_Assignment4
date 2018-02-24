var mongoose = require('mongoose');

var NoteSchema = mongoose.Schema({
    Username: String,
    Password: String,
    Notes: {
        Title: String,
        Contents: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);