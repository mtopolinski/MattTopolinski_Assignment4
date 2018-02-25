var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/note';
mongoose.connect(dbURI);

// Configuring the database


mongoose.Promise = global.Promise;


mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
});

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