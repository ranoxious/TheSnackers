const express = require('express');
const cors = require('cors');
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');
const db = require('./models');


var port = process.env.PORT || 3029;
var router = express.Router();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cors());

app.use(routes);

mongoose.connect("mongodb://localhost/snacks");




app.get("/snacks", function(req, res) {
  // Grab every document in the Articles collection
  db.snacks.find({})
    .then(function(dbsnacks) {
      // If we were able to successfully find Articles, send them back to the client
      res.json(dbsnacks);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});








app.listen(port, () => {
	console.log(`🌎 ==> Server now on port ${port}!`);
  });