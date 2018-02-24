var mongoose = require('mongoose');

var Assign4Schema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Assign4', Assign4Schema);
