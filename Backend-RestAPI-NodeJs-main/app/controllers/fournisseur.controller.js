const Fournisseur = require('../models/fournisseur.model.js');

// Create and Save a new fournisseur
exports.create = (req, res) => {
    // Validate request
    if(!req.body.nomFour) {
        return res.status(400).send({
            message: "fournisseur content can not be empty"
        });
    }

    // Create a fournisseur
    const fournisseur = new Fournisseur({
        nomFour: req.body.nomFour || "Untitled fournisseur", 
        adresse: req.body.adresse,
        codepost: req.body.codepost,
        ville: req.body.ville,
        pays: req.body.pays,
        telep: req.body.telep,
        fax: req.body.fax,
        email: req.body.email,
        nomEntre: req.body.nomEntre
    });

    // Save fournisseur in the database
    fournisseur.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the fournisseur."
        });
    });
};

// Retrieve and return all fournisseur from the database.
exports.findAll = (req, res) => {
    Fournisseur.find()
    .then(fournisseurs => {
        res.send(fournisseurs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving fournisseur."
        });
    });
};

// Find a single fournisseur with a fournisseurd
exports.findOne = (req, res) => {
    Fournisseur.findById(req.params.fournisseurId)
    .then(fournisseur => {
        if(!fournisseur) {
            return res.status(404).send({
                message: "produit not found with id " + req.params.fournisseurId
            });            
        }
        res.send(fournisseur);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "produit not found with id " + req.params.fournisseurId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving produit with id " + req.params.fournisseurId
        });
    });
};

// Update a fournisseur identified by the fournisseurId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.nomFour) {
        return res.status(400).send({
            message: "fournisseur content can not be empty"
        });
    }

    // Find fournisseur and update it with the request body
    Fournisseur.findByIdAndUpdate(req.params.fournisseurId, {
        nomFour: req.body.nomFour || "Untitled fournisseur", 
        adresse: req.body.adresse,
        codepost: req.body.codepost,
        ville: req.body.ville,
        pays: req.body.pays,
        telep: req.body.telep,
        fax: req.body.fax,
        email: req.body.email,
        nomEntre: req.body.nomEntre
    }, {new: true})
    .then(fournisseur => {
        if(!fournisseur) {
            return res.status(404).send({
                message: "fournisseur not found with id " + req.params.fournisseurId
            });
        }
        res.send(fournisseur);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "fournisseur not found with id " + req.params.fournisseurId
            });                
        }
        return res.status(500).send({
            message: "Error updating fournisseur with id " + req.params.fournisseurId
        });
    });
};

// Delete a fournisseur with the specified fournisseurId in the request
exports.delete = (req, res) => {
    Fournisseur.findByIdAndRemove(req.params.fournisseurId)
    .then(fournisseur => {
        if(!fournisseur) {
            return res.status(404).send({
                message: "fournisseur not found with id " + req.params.fournisseurId
            });
        }
        res.send({message: "fournisseur deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "fournisseur not found with id " + req.params.fournisseurId
            });                
        }
        return res.status(500).send({
            message: "Could not delete fournisseur with id " + req.params.fournisseurId
        });
    });
};
