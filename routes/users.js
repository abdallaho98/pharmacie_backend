const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/twilio', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
