var express = require('express');
var router = express.Router();

/* GET Add page. */
router.get('/', function(req, res, next) {
    res.render('listAdd', { title: 'listAdd'});
});

/* Handle POST from page form. */
router.post('/', function(req, res, next) {

    console.log('listAdd post from form');
    console.log(req.body.title);
    console.log(req.body.content);

    res.render('listAdd', { title: 'you submitted the form'});
});

module.exports = router;