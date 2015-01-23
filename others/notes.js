db.users.find("score": {$gte: 50, $lte: 60})
db.users.find("name": {$gte: "D", $lte: "L"})

db.people.find({name: {$regex: "a"}})
db.people.find({name: {$regex: "e$"}})
db.people.find({name: {$regex: "^A"}})

db.people.find({name: {$type: 2}})
db.people.find({name: {$exists: true}})

$in - has to include just one of them
$all - has to include all

db.catalog.find({price: {$gt: 10000}, "reviews.rating": {$gte: 5}})

.sort().limit().skip(); //in order
db.scores.find({type: "exam"}).sort({score: -1}).skip(50).limit(20)

$set, $inc
db.scores.find({type: "exam"}).sort({score: -1}).skip(50).limit(20)

db.collection('grades').findOne(query, callback);

// SUPPORT: Thresh, Morgana, Braum
// JUNGLE: Reksai, Vi, Rammus
// TOP: Reksai, Malphite, Lissandra

// ADC: Caitlyn, Jinx
// MID: Lissandra

// app.engine('html', cons.swig);
// app.set('view engine', 'html');
// app.set('views', __dirname + '/views');

// var mongoclient = new MongoClient(new Server('localhost', 27017, {
//   'native_parser': true
// }));

// var db = mongoclient.db('course');

// app.get('/', function(req, res) {
//   // res.send('Hello, World!');
//   db.collection('hello_mongo_express').findOne({}, function(err, doc) {
//     console.log(doc);
//     res.render('hello', doc);
//   });
//   // res.render('hello', {
//   //   'name': "Swig"
//   // });
// });

// app.get('/:name', function(req, res, next){
//   var name = req.params.name;
//   var getvar1 = req.query.getvar1 || '';
//   var getvar2 = req.query.getvar2 || '';
//   res.render('hello', {
//     'name': name,
//     'getvar1': getvar1,
//     'getvar2': getvar2
//   });
// });

// app.get('*', function(req, res) {
//   res.send("Page Not Found", 404);
// });

// mongoclient.open(function(err, mongoclient) {
//   if (err) throw err;
//   app.listen(8080);
//   console.log('Express server started on port 8080');
// });



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

