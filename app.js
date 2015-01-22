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
  Server = require('mongodb').Server;

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

var mongoclient = new MongoClient(new Server('localhost', 27017, {
  'native_parser': true
}));

var db = mongoclient.db('course');

app.get('/', function(req, res) {
  // res.send('Hello, World!');
  db.collection('hello_mongo_express').findOne({}, function(err, doc) {
    console.log(doc);
    res.render('hello', doc);
  });
  // res.render('hello', {
  //   'name': "Swig"
  // });
});

app.get('/:name', function(req, res, next){
  var name = req.params.name;
  var getvar1 = req.query.getvar1 || '';
  var getvar2 = req.query.getvar2 || '';
  res.render('hello', {
    'name': name,
    'getvar1': getvar1,
    'getvar2': getvar2
  });
});

app.get('*', function(req, res) {
  res.send("Page Not Found", 404);
});

mongoclient.open(function(err, mongoclient) {
  if (err) throw err;
  app.listen(8080);
  console.log('Express server started on port 8080');
});



// var MongoClient = mongodb.MongoClient;

// MongoClient.connect('mongodb://localhost:27107/test', function(err, db) {
//   if (err) throw err;

//   db.collection('coll').findOne({}, function(err, doc) {
//     if (err) throw err;

//     // Print result
//     console.dir(doc);

//     db.close();
//   });

//   console.dir("Called findOne!");
// });