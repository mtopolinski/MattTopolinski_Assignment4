var mongoose = require('mongoose');

var Assign4Schema = mongoose.Schema({
    Username: String,
    Password: String,
    Notes: {
        Title: String,
        Contents: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Assign4', Assign4Schema);
