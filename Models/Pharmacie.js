const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PharmacieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    adresse: String,

    caisse: String,

    heurOverture : String,

    heurFermeture : String,

    phone : String ,

    fb : String ,

    lat : Number ,

    lng : Number ,

});

module.exports = mongoose.model('pharmacie', PharmacieSchema);