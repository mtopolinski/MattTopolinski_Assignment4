var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/Assign4';
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
