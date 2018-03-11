var express = require('express');
var router = express.Router();

/* GET Editor List. */
router.get('/', function(req, res, next) {
    res.render('listEdit', { title: 'listEdit'});
});


/* Handle PUT from page form. */
router.put('/', function(req, res, next) {

    console.log('listEdit post from form');
    console.log(req.body.title);
    console.log(req.body.contents);
    console.log(req.params.id);



    const path = 'http://localhost:3000/test/users/'+req.params.id+'/notes/'+req.params.title;

    var postdata = {
        Notes: {
            Title: req.body.title,
            Contents: req.body.contents
        }
    };
    const requestOptions = {
        url : path,
        method : 'PUT',
        json : postdata };

    request(
        requestOptions,
        (function (err, response, body) {

            console.log(body);

            res.render('listEdit', { title: 'listEdit', notes: body});
        })
    );
});


module.exports = router;