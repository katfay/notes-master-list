// NEXT STEPS
// - create DB with collection with documents with data
// - set up MongoDB queries (CRUD operations)

// STEPS

// //Create frontend shell (basic)

// Needs a fetch API call
// Example of this is: (see working version in expense-tracker-test)

// function retrieveExpenses() {
//   // Fetch the file containing the user's responses to the 'Add an expense' form. This is first retrieved from the cloud database and then hosted on a local server as an API, using a middleware function.
//   fetch("http://localhost:5000/expense/list")
//     // Convert the fetched response to a JSON format.
//     .then((res) => res.json())
//     // Print this JSON object on my console
//     .then((data) => {
//       console.log(data));
//     }

// // Create node initial environment ("backend env for our frontend")

// New workspace (folder)
// index.js file
// .env file and add "DB_HOST:localhost" to line 1
// In terminal, check node, npm, nodemon installed and versions
// In terminal, run npm init to create JSON package
// In terminal, install express, body-parser, cors, mongoose, dotenv (npm install <name> --save)
// Run npm intall
// Add start script under test script and direct to relative index.js file ("nodemon index.js")
// Add test script for dotenv from its npm website, append ".DB_HOST" after .env and test npm start to see if this console logs the correct result (to see if .env is being processed through node and index.js file)

// // Add express functions to build local server and listen for connections (see node-express.js notes for detailed code)

// In the index.js file, require express (assign as a const)
// Assign app as a constant for express() [ const app = express() ]
// Write a get request to handle reqeusts to the homepage ("/") i.e. show specified text on the homepage when "/" is accessed - see express notes
// Note this get request is the middleware function where we can add in API endpoints
// Write a listener request to listen for connections to the server - see express notes
// Test that the local server has been created and is listening
// Open the terminal and run npm start. If nodemon doesn't show errors, server should be listening
// Check further by opening broswer, typing in localhost:<portnumber>
// This is the port number you used in the express listen request
// You should see in the body of the browser page, the contents of the index.js file express get request e.g. "Hello World" or whatever text/html you have included.

// // Add the other express functions that enable us to properly retrieve, send, update and show the requested data
// body-parser
// cors
// body-parser module/package changes response objects to JSON format
// cors allows us to acces APIs from external resources
// Require these modules and assign them as constants
// Use them in the express app. function - see example in express.js notes

// // Create db.js file (see node-mongoose.js notes)
// Create 'models' folder in root
// Create 'db.js' file in this folder
// Assign mongoose as a constant
// Add the mongoose connection code
// Require the expense.model.js file

// // Create a DB. We are using MongoDB Atlas in this project

// Log into MongoDB Atlas
// Create a project
// Create a DB
// Create one collection
// Add min. 1 file/document to that collection (for testing)
// When setting up the project/DB, need to remember the user's password for this. Different to MongoDB Atlas login password. Not retrievable if you don't remember. Don't use special characters as this is fiddly to remember unicode
// Add IP address 0.0.0.0/0 (this opens all IP addresses)
// When collection is created, go to DB and 'connect'
// Connect application
// Copy code
// Enter code snippet into db.js file (into mongoose.connect function)
// Update code snippet password section with this database/cluster's unique password

// // Set up expense.model.js file

// Create a new file in the models folder
// Name the file expense.model.js
// Put the code in to handle our objects - see example in 'db-expense.model.js' file

// // Set up expense.controller

// Create a new folder in the root
// Call this folder "controller"
// Create a new file in this folder
// Call this file expenseController.js
// Insert the code from e.g. the db-expenseController.js notes
