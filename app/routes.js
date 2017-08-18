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
  var month = moment().format('M'),
      day = moment().format('D');
  Day.find({ day: day, month: month }).exec(function(err, days) {
    if (err) {
      res.status(400).send({ error: err });
    }
    res.status(200).send({ days: days });
  });
});

router.post('/days', function(req, res) {
  Day.create(req.body.day, function(err, day) {
    if (err) {
      res.status(400).send({ error: err });
    }
    res.status(201).send({ day: day });
  });
});

router.put('/days/:id', function(req, res) {
  Day.findByIdAndUpdate(req.params.id, req.body.day, { new: true }, function(err, dayDoc) {
    if (err) {
      res.status(400).send({ error: err });
    }
    res.status(200).send({ day: dayDoc });
  })
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
