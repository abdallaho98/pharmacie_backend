const express = require('express');
const router = express.Router();
const Pharmacie = require('../Models/Pharmacie')

/* GET home page. */
router.get('/', function(req, res, next) {
    Pharmacie.find().then(data => {res.send({pharmacies : data});}).catch(err => {res.status(400).send(err);})
});

/* GET home page. */
router.post('/add', function(req, res, next) {
    console.warn("process create")
    Pharmacie.create(req.body).then(data => {   res.send(data);}).catch(err => {res.status(400).send(err);})
});

module.exports = router;
