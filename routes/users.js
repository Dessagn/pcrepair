var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/Tom', function(req, res, next) {
  res.send(`This is users list Tom!`);
});

module.exports = router;
