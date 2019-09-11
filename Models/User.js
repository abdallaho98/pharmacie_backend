const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nss: {
        type: String,
        required: true
    },
    fname: String,
    lname: String,
    adresse: String,
    phone : String ,
    password: String ,
    verfied : Boolean,
});


module.exports = mongoose.model('user', UserSchema);