// var http = require('http');

// var server = http.createServer(function(request, response){
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.end("Hello, World!\n");
// });

// server.listen(8000);

// console.log("Server running at http://localhost:8000");

var express = require('express'),
  app = express(),
  cons = require('consolidate'),
  MongoClient = require('mongodb').MongoClient,
  routes = require('./routes');

MongoClient.connect('mongodb://localhost:27017/blog', function(err, db) {
  "use strict";
  if (err) throw err;

  app.engine('html', cons.swig);
  app.set('view engine', 'html');
  app.set('views', __dirname + "/views");

  app.use(express.cookieParser());
  app.use(express.bodyParse());

  routes(app, db);
  app.listen(3000);
  console.log("Express server listening on port 3000");
});
