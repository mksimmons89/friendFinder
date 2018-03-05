var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 5000;


// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "home.html"));
// });
//
//
// app.get("/survey", function(req, res) {
//   res.sendFile(path.join(__dirname, "survey.html"));
// });


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});




  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/home.html"));
  // });
  //
  // app.get("/survey", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/survey.html"));
  // });


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



// app.get("/", function(req, res) {
//   // res.send("Welcome to the Star Wars Page!")
//   res.sendFile(path.join(__dirname, "view.html"));
// });
//
// // Get all characters
// app.get("/all", function(req, res) {
//   res.json(characters);
// });
//
// // Search for Specific Character (or all characters) - provides JSON
// app.get("/api/:characters?", function(req, res) {
//   var chosen = req.params.characters;
//
//   if (chosen) {
//     console.log(chosen);
//
//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         return res.json(characters[i]);
//       }
//     }
//     return res.json(false);
//   }
//   return res.json(characters);
// });
//
// // Create New Characters - takes in JSON input
// app.post("/api/new", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body-parser middleware
//   var newcharacter = req.body;
//
//   console.log(newcharacter);
//
//   // We then add the json the user sent to the character array
//   characters.push(newcharacter);
//
//   // We then display the JSON to the users
//   res.json(newcharacter);
// });
//
// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });
