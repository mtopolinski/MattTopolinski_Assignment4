var Assign4 = require('./models/Assign4.model.js');

exports.create = function(req, res) {
    // Create and Save a new Note

};

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.

};

exports.findOne = function(req, res) {
    // Find a single note with a noteId

};

exports.update = function(req, res) {
    // Update a note identified by the noteId in the request

};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request

};

exports.create = function(req, res) {
    // Create and Save a new Note
    if(!req.body.content) {
        res.status(400).send({message: "Assign4 can not be empty"});
    }
    var assign4 = new Assign4({title: req.body.title || "Untitled Entry", content: req.body.content});

    assign4.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Assign entry."});
        } else {
            res.send(data);
        }
    });
};
