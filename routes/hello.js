var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('hello', { title: 'Hello, World!' });
});

module.exports = router;