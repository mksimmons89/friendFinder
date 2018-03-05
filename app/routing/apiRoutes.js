var path = require("path");
var friends = require("../data/friends.js");
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    var allFriends = req.body;
    res.send(allFriends);
  });
  app.post("/api/friends", function(req, res) {
    var newFriends = req.body;
    var newScores = req.body.scores;
    var totalDifference;
    console.log(req.body);
    res.json(newFriends);
    console.log(newFriends);
    console.log(friends);
    var dummyBuddy = {
      name: "",
      photo: "",
      variance: 100
    };
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;
      // console.log(currentFriend);

      for (var z = 0; z < friends[i].scores.length; z++) {
        var currentFriendScore = parseInt(currentFriend.scores[z]);
        var newFriendScore = parseInt(newScores[z]);
        console.log("current friend in loop:" + currentFriendScore);
        console.log("added user score: " + newFriendScore);
        totalDifference += Math.abs(currentFriendScore - newFriendScore);
      }
      console.log(totalDifference);
    }
    friends.push(newFriends);
  });
};
