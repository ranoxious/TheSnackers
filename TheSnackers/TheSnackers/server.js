const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');
const db = require('./models');

var port = process.env.PORT || 3029;


var router = express.Router();

const routes = {
  products: {
    get: 'api/products'
  }
};


app.use(cors());


app.get('*', function(req, res){
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });

app.use('*', function (req, res) {
    res.redirect(routes.products.get);
});


app.listen(port, () => {
	console.log(`🌎 ==> Server now on port ${port}!`);
  });