var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

require('./app/models/note.model.js');

var index = require('./routes/index');
var users = require('./routes/users');
var list = require('./routes/list');
var listEdit = require('./routes/listEdit');
var listAdd = require('./routes/listAdd');
var login = require('./routes/login');
var routesApi = require('./app/routes/note.routes');

var app = express();

var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;



mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
});

// define a simple route
app.get('/', function(req, res){
    res.json({"message": "Welcome to the Note DB page."});
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/users', users);
app.use('/list', list);
app.use('/listEdit', listEdit);
app.use('/listAdd', listAdd);
app.use('/login', login);
app.use('/test', routesApi);


// define a simple route
app.get('/', function(req, res){
    res.json({"message": "Welcome to Assign4 DB."});
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
