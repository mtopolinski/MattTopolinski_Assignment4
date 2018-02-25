var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
var methodOverride = require('method-override'); //used to manipulate POST

var mongoose = require('mongoose');



/* GET list. */
router.get('/', function(req, res, next) {
    res.render('list', { title: 'List'});
});




module.exports = router;

