// EXAMPLE OF A <MODEL>CONTROLLER.JS FILE - LIVES INSIDE THE CONTROLLER FOLDER

// Require the express module
const express = require("express");

// Assign the variable "router" to the express Router function
var router = express.Router();

// Require the mongoose module
const mongoose = require("mongoose");

// May need to double check if it's "moods" per my MongoDB Atlas naming, or "Moods" for another naming convention/JS reason
const Moods = mongoose.model("Moods");

// Create an API endpoint ("/list")
// Get the list of moods (the objects/data)
// This URI should match the endpoint in the fetch function in the frontend JS file
router.get("/list", (req, res) => {
  // Find the list of moods from (?the endpoint/the database collection)
  Moods.find((err, docs) => {
    if (!err) {
      // Send back the list of moods to the endpoint ("/list")
      res.send(docs);
    } else {
      // Show a specific error message if this function can't get/find the moods collection
      console.log(
        "Error in retrieval moodsController express get request find and send list of Moods : " +
          err
      );
    }
  });
});

// Handles the ID key - which comes in automatically from MongoDB
// Get the ID/s for the list of moods (data/objects)
router.get("/:id", (req, res) => {
  Moods.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in retrieval moodsController express get request find by ID : " +
          err
      );
    }
  });
});

// Post (insert or create and update) the objects/data
// Note this endpoint is different to the "/list" endpoint
router.post("/", (req, res) => {
  // If the body ID does not exist or is blank, insert or create the record
  if (!req.body_id || req.body._id == "") {
    console.log("insert");
    // Call custom function from below
    insertRecord(req, res);
    // Otherwise update the existing record
  } else {
    console.log("update");
    // Call custom function from below
    updateRecord(req, res);
  }
});

// Custom function to insert (or create) a mood object
function insertRecord(req, res) {
  var moodsObj = new Moods();
  moodsObj.mood = req.body.mood;
  moodsObj.date = req.body.date;
  moodsObj.notes = req.body.notes;
  moodsObj.save((err, doc) => {
    // If no error in inserting or creating this object, send the response object to moods/list endpoint
    if (!err) {
      res.redirect("moods/list");
      // Show this message is there is an error in creating this mood object
    } else {
      console.log(
        "Error during insert insertRecord function in moodsController : " + err
      );
    }
  });
}

// Custom function to update a mood object
function updateRecord(req, res) {
  Moods.findOneAndUpdate({ _id: req.body._id }, req.body, (err, doc) => {
    // If no error in updating this object, send the response object to moods/list endpoint
    if (!err) {
      res.redirect("moods/list");
      // Show this message is there is an error in updating this mood object
    } else {
      console.log(
        "Error during updateRecord function in moodsController :" + err
      );
    }
  });
}

// Use the delete http (express?) method
router.delete("/delete/:id", (req, res) => {
  // Mongoose has inbuilt functions (including findByIdAndRemove)
  Moods.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      // Send back a status 200
      res.send(200);
    } else {
      console.log("Error during delete method update :" + err);
    }
  });
});

module.exports = router;
