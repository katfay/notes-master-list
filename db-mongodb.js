// MONGODB

/* NOTES
- Databases (DB) (relational) contain collections which contain files which contain data
- Our frontend and backend environments are not DBs, they are applications
- MongodB Query is a way to get the data from the MongoDB database
*/

// MONGODB QUERIES

// Insert a document into a collection
// insert() method
insert();
db.COLLECTION_NAME.insert(document);

// Show the database collection in non-structured form (key-value pair)
// find() method
find();
db.COLLECTION_NAME.find();

// Find a single document
// findOne() method returns the first document that matches the filter query expression
findOne();
db.COLLECTION_NAME.findOne();

// Match (find?) a document where the value of a field (the <key>) equals the <value> requested
// Equal operator
/* 
db.COLLECTION_NAME.find({< key > : {$eq : < value >}});
*/

// Select documents where the value of a field (the <key>) is greater than the <value> requested
// Greater-than operator
/*
db.COLLECTION_NAME.find({ < key > : <$gte : < value > }});
*/

// Check if a certain <key> exists in the document
// Existence query (check the existence filter query)
/*
db.COLLECTION_NAME.find({< key > : {$exists : < boolean >}});
*/

// Set a maximum number (the <integer_value>) of results
// Limit query
/*
db.COLLECTION_NAME.find({< key > : < value >}).limit(< Integer_value >);
*/

// Return results sorted in ascending (1) order
// Sort the fields query (ascending)
// db.collection_name.find().sort({< key > : 1});

// Return results sorted in descending (-1) order
// Sort the fields query (descending)
// db.collection_name.find().sort({< key > : -1});

// MONGODB LOGICAL OPERATOR QUERIES

// Return all documents that match the conditions/values of both clauses
// And logical operator query
/*
db.COLLECTION_NAME.find({$and : [{< key > : {$eq : < value1 >}}, {< key > : {$exists : < boolean >}}]});
*/

// Return all documents that match the conditions/values of either clause
// Or logical operator query
/*
db.COLLECTION_NAME.find({$or : [{< key > : {$eq : < value1 >}}, {< key > : {$exists : < boolean >}}]});
*/

// Return all documents that fail to match the conditions/values of both clauses
// Nor logical operator query
/*
db.COLLECTION_NAME.find({$nor : [{< key > : {$eq : < value1 >}}, {< key > : {$exists : < boolean >}}]});
*/

// Returns documents that do not match the condition/value
// Not locigal operator query
/*
db.COLLECTION_NAME.find({$not : [{< key > : {$eq : < value1 >}}, {< key > : {$exists : < boolean >}}]});
*/
