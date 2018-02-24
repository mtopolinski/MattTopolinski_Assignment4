module.exports = function(app) {

    var notes = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/users/:id/notes/', notes.create);

    // Get all Notes matching Username
    app.get('/users/:id/notes', notes.findUser);

    // Retrieve a single Note matching Title
    app.get('/users/:id/notes/:title', notes.findTitle);

    // Update a Note with specified Title
    app.put('/users/:id/notes/:title', notes.update);

    // Delete a Note with specified Title
    app.delete('/users/:id/notes/:title ', notes.delete);
};