require('dotenv').load();

const express = require('express');
const app = express();
const mongo = require('./services/mongodb');
const mongoEnv = process.env.NODE_ENV;
const cors = require('cors');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// enable CORS for ALL requests
app.use(cors());

// Connect to the database
require('mongoose').connection.close(function reestablish() {
  mongo.connect(mongoEnv);
});

// Define router
var router = require('./app/routes');
app.use('/api', router);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('TTL API listening on port 3000!');
});
