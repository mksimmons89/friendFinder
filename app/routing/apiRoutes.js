var friends = require("../data/friends.js")

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var newFriendsData = req.body;
    var totalDifference;



    var matchingArray = {};

    for (var i = 0; i < newFriendsData.scores.length; i++) {
      if (newFriendsData.scores[i] == "1 (Strongly Disagree)") {
        newFriendsData.scores[i] = 1;
      } else if (newFriendsData.scores[i] == "5 (Strongly Agree)") {
        newFriendsData.scores[i] = 5;
      } else {
        newFriendsData.scores[i] = parseInt(newFriendsData.scores[i]);
      }
    };

    var bestMatchIndex = 0;
    //greatest score difference for a question is 4, therefore greatest difference is 4 times # of questions in survey
    var bestMatchDifference = 40;

    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;

      console.log(currentFriend);
      for (var z = 0; z < currentFriend.scores.length; z++) {
        var currentFriendScore = parseInt(currentFriend.scores[z]);
        var newFriendScore = parseInt(newFriendsData.scores[z]);

        console.log("current friend in loop:" + currentFriendScore);
        console.log("added user score: " + newFriendScore);

        totalDifference += Math.abs(currentFriendScore - newFriendScore);
      };
      console.log(totalDifference);

      if (totalDifference < bestMatchDifference) {
        bestMatchIndex = i;
        bestMatchDifference = totalDifference;
      };

    };


    matchingArray = friends[bestMatchIndex];

    friends.push(newFriendsData);

    res.json(matchingArray);



  });
};
