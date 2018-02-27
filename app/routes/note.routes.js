var express = require('express');
var router = express.Router();
var notes = require('../controllers/note.controller.js');

// Create a new Note
router.post('/users/:id/notes/', notes.create);

// Get all Notes matching Username
router.get('/users/:id/notes', notes.findUser);

// Retrieve a single Note matching Title
router.get('/users/:id/notes/:title', notes.findTitle);

// Update a Note with specified Title
router.put('/users/:id/notes/:title', notes.update);

// Delete a Note with specified Title
router.delete('/users/:id/notes/:title ', notes.delete);

module.exports = router;
