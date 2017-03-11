var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Hello World!');
});

router.get('/days', function(req, res) {
  res.send('Get all days');
});

module.exports = router;
