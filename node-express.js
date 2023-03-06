// NOTES

// Express functions -
// req = request object (fetches all the data required to execute the middleway function)
// //When we say 'request' it means 'requests to the path' which means an endpoint e.g. url e.g. localhost:3000. Putting this in the browswer is considered a request, which will return a response using the express functions below
// res = response object (responds back with the data we want to show in the frontend)
// next = variable name for next middleware function after this function completes
// app.use = function to bind the middleware to an instace of the app object
// app.method = function to bind the middleware to an instace of the app object
// get, put or post = http method of that app handles
// app.get
// app.put
// app.post
// app.use
// app.listen = to bind and listen for connections on the specified host and port

// They -
// execute specific code
// make changes to the req and res objects
// end the request-response cycle
// call the next middleware function in the stack

// Handle routing. Is a routing and middleware framework. Series of middleware function calls. Route paths + request method (get, post, etc) define the endpoints (containing the data/collection/DB/API) to which requests can be made. Can be strings, string patterns, or regex

// Middleware functions that return a promise will call the next function when they reject or throw an error

// EXAMPLE LISTEN REQUEST
// This function uses 3000 as our port and verifies the port is active if we see the console.log message
// Import the express module
var express = require("express");
// app is the object of the express server
var app = express();
app.listen(3000, () => {
  console.log("Server started on port 3000");
});

// EXAMPLE LISTEN REQUEST 2
// This function starts a server and listens on port 3000 for connections
// Import the express module
var express = require("express");
// app is the object of the express server
var app = express();
// We will be using 3000 as the port. This declares the port
var port = 3000;
app.get("/", (req, res) => {
  // This "Hello World" is what will be sent to the homepage "/". This string will appear in the body of the frontend.
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("Example app listening on port ${port}");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

// EXAMPLE GET REQUEST
// This function responds with "hello world" when a get request is made to the homepage
// express library needs to be installed in the node modules (npm install express --save)
var express = require("express");

var app = express();

// "/" is root or homepage
app.get("/", function (req, res) {
  res.send("hello world");
});

// EXAMPLE GET REQUEST
// This function match requests to /about
var express = require("express");

var app = express();

// "/" is root or homepage
app.get("/about", function (req, res) {
  res.send("about");
});

// EXAMPLE POSTS REQUEST
// This function [DOES WHAT?] with "hello world" when a get request is made to the homepage
var express = require("express");

var app = express();

// "/" is root or homepage
app.post("/", function (req, res) {
  res.send("hello world");
});

// EXAMPLE
// This function
var express = require("express");

var app = express();

// EXAMPLE - FUNCTION EXECUTED EVERY TIME THE APP RECEIVES A REQUEST (DUE TO USE)
app.use(function (req, re, next) {
  console.log("Time:", Date.now());
  next();
});
