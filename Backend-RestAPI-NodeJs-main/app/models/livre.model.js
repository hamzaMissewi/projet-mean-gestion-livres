const mongoose = require('mongoose');

const LivreSchema = mongoose.Schema({
    nom: String,
    auteur: String,
    prix: String,
    date: String,
    categorie: String,
    description: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Livre', LivreSchema);