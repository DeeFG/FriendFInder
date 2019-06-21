
// ===================
// ===================
// ===================

// Basic route that sends the user first to the AJAX Page

const express = require('express'); // =========establish express==========
const router = express.Router();  // ==========make a express router=========

 

module.exports = function(connection){
  
  // Displays all friend
  app.get("/api/friend", function(req, res) {
    return res.json(friend);
  });
  
  // Displays a single friend, or returns false
  app.get("/api/friend/:friend", function(req, res) {
    var chosen = req.params.friend;
  
    console.log(chosen);
  
    for (var i = 0; i < friend.length; i++) {
      if (chosen === friend[i].routeName) {
        return res.json(friend[i]);
      }
    }
  
    return res.json(false);
  });
  
  // Create New friend - takes in JSON input
  app.post("/api/friend", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newfriend = req.body;
  
    // Using a RegEx Pattern to remove spaces from newfriend
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newfriend);
  
    friend.push(newfriend);
  
    res.json(newfriend);
  });

};