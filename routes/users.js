const express = require('express');
const router = express.Router();
const User = require('../Models/User')

/* GET users listing. */
router.get('/twilio', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res, next) {
  User.create(req.body).then(data => {   res.send(data);}).catch(err => {res.status(400).send(err);})
});

router.post('/login', function(req, res, next) {
  User.findOne(
      { phone: req.body.phone , password : req.body.password }
  ).then(data => {   res.send(data);}).catch(err => {res.status(400).send(err);})
});

module.exports = router;
