var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
     title: 'Home',
     name: 'Tom Doyel',
    header: 'Landing page with EXPRESS' });
});

module.exports = router;
