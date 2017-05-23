var express = require('express');
var app = express();
var cors = require('cors')
app.use(cors());

import api from './api';

/*
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users'); */

// view engine setup
/*app.set('views', path.join(dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

*/

//app.use('/', routes);


app.get('/getTopAlbums', async function (req, res) {
  try {
    let results = await Promise.all([api.getTopAlbums()]);
    res.json(results);
  } catch (err) {
    //Do something here on err.
  }

});

app.get('/getRecentTracks', async function (req, res) {

  try {
    let results = await Promise.all([api.getRecentTracks()]);
    res.json(results);
  } catch (err) {
    //Do something here on err.
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers
/*
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
*/


// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});




module.exports = app;