var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
var methodOverride = require('method-override'); //used to manipulate POST
var request = require('request');

var mongoose = require('mongoose');


/* GET list. */
router.get('/', function(req, res, next) {

    //this is what it should be, I hard coded it to make it work as the route is set up now.
    //const path = 'http://localhost:3000/test/users/' + req.params.id + '/notes';


    const path = 'http://localhost:3000/test/users/5a949e313981a7ae24c365cb/notes';

    const requestOptions = {
        url : path,
        method : 'GET',
        json : {}
    };

    request(
        requestOptions,
        (function (err, response, body) {

            console.log(body);

            res.render('list', { title: 'List', notes: body});
        })
    );


});




module.exports = router;

