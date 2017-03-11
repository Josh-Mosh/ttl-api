require('dotenv').load();

const express = require('express');
const app = express();
const mongo = require('./services/mongodb');
const mongoEnv = process.env.NODE_ENV;

// Connect to the database
require('mongoose').connection.close(function reestablish() {
  mongo.connect(mongoEnv);
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
