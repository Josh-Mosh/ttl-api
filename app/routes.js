var express = require('express');
var router = express.Router();

// Models
var Day = require('./models/day');

// Routes
router.get('/', function(req, res) {
  res.send('Hello World!');
});

router.get('/days', function(req, res) {
  Day.find().exec(function(err, days) {
    if (err) {
      res.status(400).send({ error: err});
    }
    res.status(200).send({ days: days });
  });
});

router.post('/days', function(req, res) {
  console.log('days post');
  Day.create({}, function(err, day) {
    if (err) {
      res.status(400).send( {error: err });
    }
    res.status(201).send(day);
  });
});

module.exports = router;
