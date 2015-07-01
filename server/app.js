(function () {
  'use strict';

  var mongoose = require('mongoose');
  var connection = mongoose.createConnection('mongodb://localhost/estudio39');
  connection.on('error', console.error.bind(console, 'connection error:'));
  connection.once('open', initApp);

  var ActivitiesModel = connection.model('Activity', require('./activities/schema.activities.js')(mongoose), 'activities');

function initApp(){

  var express = require('express');
  //var ioModule = require('socket.io');
//  var http = require('http');
//  var https = require('https');
  var bodyParser = require('body-parser');
  var cors = require('cors');

  var app = express();
  app.use('/', bodyParser());
  app.use('/', cors());
  app.use('/client', express.static('../client'));
  app.use('/activities', require('./activities/routes.activities.js')(express, ActivitiesModel));


  app.get('/caca', function (req, res) {
    res.json('Hello World!');
  });
  var server = app.listen(3000);
}
}());