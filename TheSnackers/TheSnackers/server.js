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



app.listen(port, () => {
	console.log(`🌎 ==> Server now on port ${port}!`);
  });