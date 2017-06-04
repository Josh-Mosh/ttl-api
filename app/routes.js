var express = require('express');
var router = express.Router();

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

router.post('/days', function(req, res) {
  var day = req.body.day,
      date = day.date;

  if (date.month && date.day && date.year) {
    day.date = new Date(date.month + '/' + date.day + '/' + date.year);
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
  console.log('delete days');
  Day.findByIdAndRemove(req.params.id, function(err, day) {
    if (err) {
      res.status(400).send({ error: err });
    }
    res.status(200).send({ day: day });
  });
});

module.exports = router;
