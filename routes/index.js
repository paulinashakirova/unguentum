var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  //do we need to change render here ?
  res.render('index', { title: 'Express' });
});

module.exports = router;
