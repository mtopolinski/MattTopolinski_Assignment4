var Note = require('../models/note.model.js');

exports.create = function(req, res) {
    // Create and Save a new Note
    if(!req.body.content) {
        res.status(400).send({message: "Note can not be empty"});
    }

    var note = new Note({title: req.body.title || "Untitled Note", content: req.body.content});

    note.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Note."});
        } else {
            res.send(data);
        }
    });
};


exports.findUser = function(req, res) {
    // Retrieve Note matching Username
    Note.findByUsername(req.params.noteUsername, function(err, data){
        if(err) {
            res.status(500).send({message: "Could not find matching Username " + req.params.noteUsername});
        } else {
            res.send(data);
        }
    });
};


exports.findTitle = function(req, res) {
    // Find a single note with a Title
    Note.findByTitle(req.params.noteTitle, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not find matching Title " + req.params.noteTitle});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a note with a specified Title
    Note.findByTitle(req.params.noteTitle, function(err, note) {
        if(err) {
            res.status(500).send({message: "Could not find Title " + req.params.noteTitle});
        }

        note.username = req.body.username;

        note.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update note by Title " + req.params.noteTitle});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a note with the specified Title
    Note.remove({_title: req.params.noteTitle}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not locate Title " + req.params.title});
        } else {
            res.send({message: "Note deleted"})
        }
    });
};
