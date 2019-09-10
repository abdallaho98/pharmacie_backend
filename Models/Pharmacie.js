const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PharmacieSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    ville: String,

    wilaya: String,

    adresse: String,

    caisse: String,

    heurOverture : String,

    heurFermeture : String,

    phone : String ,

    fb : String ,

    location: {
        type: { type: String },
        coordinates: []
    },

});

PharmacieSchema.index({ location: "2dsphere" });

module.exports = mongoose.model('pharmacie', PharmacieSchema);