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

SUPPORT: Thresh, Morgana, Braum
JUNGLE: Reksai, Amumu, Skarner, Rammus
TOP: Reksai, Malphite, Lissandra

ADC: Caitlyn, Jinx
MID: Lissandra



