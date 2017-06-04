var express = require('express');
var router = express.Router();
var moment = require('moment');

// Models
var Day = require('./models/day');

// Routes
router.get('/', function(req, res) {
  res.send('Hello Travelers!');
});

router.get('/days', function(req, res) {
  Day.find().exec(function(err, days) {
    if (err) {
      res.status(400).send({ error: err });
    }
    res.status(200).send({ days: days });
  });
});

router.get('/today', function(req, res) {
  var today = moment().format('M/D');
  Day.find({ date: today }).exec(function(err, days) {
    if (err) {
      res.status(400).send({ error: err });
    }
    res.status(200).send({ days: days });
  });
});

router.post('/days', function(req, res) {
  var day = req.body.day,
      date = day.date;

  if (date.month && date.day) {
    day.date = date.month + '/' + date.day;
  } else {
    delete day.date;
  }

  Day.create(day, function(err, day) {
    if (err) {
      res.status(400).send({ error: err });
    }
    res.status(201).send({ day: day });
  });
});

router.delete('/days/:id', function(req, res) {
  Day.findByIdAndRemove(req.params.id, function(err, day) {
    if (err) {
      res.status(400).send({ error: err });
    }
    res.status(200).send({ day: day });
  });
});

module.exports = router;
