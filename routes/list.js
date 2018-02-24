var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/Assign4';
mongoose.connect(dbURI);

/* GET list. */
router.get('/', function(req, res, next) {
    res.render('list', { title: 'List'});
});

router.get('/models/db', function(req, res, next) {
dbURI.collection('Assign4').find();
});

module.exports = router;

