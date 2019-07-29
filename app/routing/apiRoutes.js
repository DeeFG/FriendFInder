
//a POST routes /api/friends - this handles incoming survey results. will also used to handle the compatibility logic
//Load Data
const friendArray = require('../data/friend.js');

module.exports = function(app){
  //a GET route that displays JSON of all possible friends
  app.get('/api/friend', function(req,res){
    res.json(friendArray);
  });

  app.post('/api/friend', function(req,res){
    //grabs the new friend's scores to compare with friends in friendArray array
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    //runs through all current friends in list
    for(var i=0; i<friendArray.length; i++){
      var scoresDiff = 0;
      //run through scores to compare friends
      for(var j=0; j<newFriendScores.length; j++){
        scoresDiff += (Math.abs(parseInt(friendArray[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      //push results into scoresArray
      scoresArray.push(scoresDiff);
    }

    //after all friends are compared, find best match
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    //return bestMatch data
    var match = friendArray[bestMatch];
    res.json(match);

    //pushes new submission into the friendsList array
    friendArray.push(req.body);
  });
};