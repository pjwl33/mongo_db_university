var MongoClient = require('mongodb').MongoClient,
    request = require('request'),
    courseDB = 'mongodb://localhost:27017/course';

// TO GET THE DATA FROM REDDIT
// MongoClient.connect(courseDB, function(err, db) {
//   if(err) throw err;

//   request('http://www.reddit.com/r/leagueoflegends/.json', function(error, response, body){
//     if (!error && response.statusCode == 200){
//       var obj = JSON.parse(body);

//       var stories = obj.data.children.map(function(story) { return story.data; });

//       db.collection('reddit').insert(stories, function(err, data) {
//         if (err) throw err;

//         console.dir(data);

//         db.close();
//       });
//     } else {
//       throw "STATUS CODE: " + response.statusCode + " | " + error;
//     }
//   });
// });

MongoClient.connect(courseDB, function(err, db){
  if (err) throw err;

  // var query = { 'title' : { '$regex' : 'EU LCS' } };
  // var projection = { 'title' : 1, '_id': 0 };
  // var query = { 'media.oembed.type': 'video' };
  // var projection = { 'media.oembed.url': 1, '_id': 0 };
  var posts = db.collection('reddit');
  var cursor = posts.find({});

  var options = {
    'skip': 1,
    'limit': 10,
    'sort': [['ups', -1], ['title', -1]]
  };
  var cursor = posts.find({}, {}, options);
  // // cursor.sort('ups', 1);
  // cursor.limit(5);
  // cursor.skip(1);
  // cursor.sort([['ups', 1], ['title', -1]]);

  cursor.each(function(err, doc) {
    if (err) throw err;
    if (doc == null) {
      return db.close();
    }
    console.dir(doc.title);
  });

  // db.collection('reddit').find(query, projection).each(function(err, doc) {
  //   if (err) throw err;

  //   if (doc == null) {
  //     return db.close();
  //   }

  //   console.dir(doc);
  // });
});