const mongoose = require('mongoose');

const FournisseurSchema = mongoose.Schema({
    nomFour: String, 
    adresse: String,
    codepost: String,
    ville: String,
    pays: String,
    telep: String,
    fax: String,
    email: String,
    nomEntre: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Fournisseur', FournisseurSchema);