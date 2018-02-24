var express = require('express');
var router = express.Router();

/* GET list. */
router.get('/', function(req, res, next) {
    res.render('list', { title: 'List'});
});

module.exports = router;

