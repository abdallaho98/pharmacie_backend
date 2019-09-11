const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommandSchema = new Schema({

    pharmacie: [{ type: Schema.Types.ObjectId, ref: 'pharmacie' }],

    user: [{ type: Schema.Types.ObjectId, ref: 'user' }],

    image : String
});


module.exports = mongoose.model('command', CommandSchema);