
// Basic route that sends the user first to the AJAX Page
var path = require('path');
const express = require('express'); // =========establish express==========
const router = express.Router();  // ==========make a express router=========
var friends = require("../data/friends");




// Displays all friends
router.get("/api/friends", function (req, res) {
    res.json(friends);
});



// Create New friends - takes in JSON input
router.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newfriend = req.body;
    console.log(req.body)

    // the new friends scores set to a variable
    var userResults = newfriend.scores;


    //finding a match  set variables for each item that is  compared
    var nameMatch = '';
    var imgMatch = '';
    // set a difference to a amximum ammount
    var totalDifference = 50;

    // Examine all existing friends in the list
    for (var i = 0; i < friends.length; i++) {
        console.log('friend = ' + JSON.stringify(friends[i]));

        // Compute differenes for each question
        var diff = 0;
        for (var j = 0; j < userResponses.length; j++) {
            diff += Math.abs(friends[i].scores[j] - userResponses[j]);
        }
        console.log('diff = ' + diff);

        // If lowest difference, record the friend match
        if (diff < totalDifference) {
            console.log('Closest match found = ' + diff);
            console.log('Friend name = ' + friends[i].name);
            console.log('Friend image = ' + friends[i].photo);

            totalDifference = diff;
            nameMatch = friends[i].name;
            imgMatch = friends[i].photo;
        }
    }



    // Using a RegEx Pattern to remove spaces from newfriend
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newfriend.name = newfriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newfriend);

    friends.push(newfriend);

    res.json(newfriend);
});




// Displays a single friends, or returns false
router.get("/api/friends/:friends", function (req, res) {
    var chosen = req.params.friends;

    console.log(chosen);

    for (var i = 0; i < friends.length; i++) {
        let findDiff = 0
        console.log(friends[i])
    }

    return res.json(false);
});


module.exports = router;
