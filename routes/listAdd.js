var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
var methodOverride = require('method-override'); //used to manipulate POST
var request = require('request');

/* GET Add page. */
router.get('/', function(req, res, next) {
    res.render('listAdd', { title: 'listAdd'});
});

/* Handle POST from page form. */
router.post('/', function(req, res, next) {

    console.log('listAdd post from form');
    console.log(req.body.title);
    console.log(req.body.contents);



    const path = 'http://localhost:3000/test/users/'+req.params.id+'/notes';
    var postdata = {
        Username: 'new user',
        Password: 'ne_pass',
        Notes: {
        title: req.body.title,
        contents: req.body.contents
    }
    };
    const requestOptions = {
        url : path,
        method : 'POST',
        json : postdata


    };

    request(
        requestOptions,
        (function (err, response, body) {

            console.log(body);

            res.render('listAdd', { title: 'listAdd', notes: body});
        })
    );
});

module.exports = router;