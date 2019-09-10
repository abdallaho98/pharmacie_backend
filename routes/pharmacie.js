const express = require('express');
const router = express.Router();
const Pharmacie = require('../Models/Pharmacie')

/* GET home page. */
router.get('/', function(req, res, next) {
    console.warn("Herre" , req.query)
    if(req.query.ville) Pharmacie.find({ville:req.query.ville}).then(data => {res.send({pharmacies : data});}).catch(err => {res.status(400).send(err);})
    else if(req.query.wilaya)Pharmacie.find({wilaya:req.query.wilaya}).then(data => {res.send({pharmacies : data});}).catch(err => {res.status(400).send(err);})
    else Pharmacie.find().then(data => {res.send({pharmacies : data});}).catch(err => {res.status(400).send(err);})
});


router.get('/near', function(req, res, next) {
    console.warn("location" , req.query)
    const locations = req.query
    Pharmacie.find(
        {
            location:
                { $near :
                        {
                            $geometry: { type: "Point",  coordinates: [ locations.lat, locations.lng ] },
                            $maxDistance: 1000
                        }
                }
        }
    ).then(data => {res.send({pharmacies : data});}).catch(err => {res.status(400).send(err);})
});


/* GET home page. */
router.post('/add', function(req, res, next) {
    console.warn("process create")
    Pharmacie.create(req.body).then(data => {   res.send(data);}).catch(err => {res.status(400).send(err);})
});

module.exports = router;
