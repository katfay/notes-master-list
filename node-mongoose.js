// MONGOOSE

// Import the mongoose module and assign this as a constant
const mongoose = require("mongoose");

// Connect to the remote MongoDB Atlas DB of your choice
mongoose.connect(
  "<MONGODBATLASCONNECTCODESNIPPETPLACEHOLDER>",
  {
    useNewUrlParser: true,
  },
  // Throw and catch connection error
  (err) => {
    if (!err) {
      console.log("<DB name> DB connection succeeded!");
    } else {
      console.log("Error in <DB name> DB connection " + err);
    }
  }
);

// Import the JS file setting out the DB model
require("./expense.model.js");
