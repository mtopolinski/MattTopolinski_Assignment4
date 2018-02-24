var express = require('express');
var router = express.Router();

/* GET Editor List. */
router.get('/', function(req, res, next) {
    res.render('listEdit', { title: 'listEdit'});
    res.send('the list edit page');
});

module.exports = router;