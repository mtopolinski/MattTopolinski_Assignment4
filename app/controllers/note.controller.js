
var mongoose = require('mongoose');
mongoose.set('debug', true);
var Note = mongoose.model('Note');

exports.create = function(req, res) {
    // Create and Save a new Note
    if(!req.body.content) {
        res.status(400).send({message: "Note can not be empty"});
    }

    var note = new Note({Username: req.body.username || "Untitled", Password: req.body.password || 'Unititled', Notes: {Title: req.body.title || "Untitled Note", Contents: req.body.contents}});

    note.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Note."});
        } else {
            res.json(data);
        }
    });
};


exports.findUser = function(req, res) {
    // Retrieve Note matching Username
    Note.find({_id: req.params.id}, function(err, data) {

        console.log(err, data);

        if(err) {
            res.status(500).send({message: "Could not find matching Username " + req.params.id});
        } else {
            res.json(data);
        }
    });
};


exports.findTitle = function(req, res) {
    // Find a single note with a Title
    Note.find({_id: req.params.id, 'Notes.Title': req.params.title}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not find matching Title " + req.params.title});
        } else {
            res.json(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a note with a specified Title
    Note.find(req.params.noteTitle, function(err, note) {
        if(err) {
            res.status(500).send({message: "Could not find Title " + req.params.noteTitle});
        }

        note.title = req.body.title;

        note.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update note by Title " + req.params.noteTitle});
            } else {
                res.json(data);
            }
        });
    });
};


exports.delete = function(req, res) {
    // Delete a note with the specified Title
    Note.find({_id: req.params.id, 'Notes.Title': req.params.title}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not locate Title " + req.params.title});
        } else if (data) {
            var array = data[0].Notes;

            for (n in array)
            {
                if (n.Title === req.params.title)
                {
                    console.log("testing");
                }
            }
            data.Notes.
            res.json({message: "Note deleted"})
        }
    });
};

