const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    nom: {
            type: String,
            unique: [true, 'The login is unique']
           
    },
    adresse: String,
    codepost: String,
    ville: String,
    pays: String,
    telep: String,
    email: {
        type: String,
        unique: [true, 'The email is unique']
       
    },
    image:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Client', ClientSchema);