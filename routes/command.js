const express = require('express');
const router = express.Router();
const Command = require('../Models/Command')

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(req.headers.user)
    Command.find({user:req.headers.user}).then(data => {res.send({commands : data});}).catch(err => {res.status(400).send(err);})
});

router.post('/add', function(req, res, next) {
    Command.create(req.body).then(data => {   res.send(data);}).catch(err => {res.status(400).send(err);})
});

module.exports = router;
