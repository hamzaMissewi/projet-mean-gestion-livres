const Livre = require('../models/livre.model.js');

// Create and Save a new livre
exports.create = (req, res) => {
    // Validate request
   // if(!req.body.noms) {
        //return res.status(400).send({
           // message: "livre content can not be empty"
        //});
    //}

    // Create a livre
    const livre = new Livre({
        nom: req.body.nom, 
        auteur: req.body.auteur,
        prix: req.body.prix,
        date: req.body.date,
        categorie: req.body.categorie,
        description: req.body.description
    });

    // Save livre in the database
    livre.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the livre."
        });
    });
};

// Retrieve and return all livre from the database.
exports.findAll = (req, res) => {
    Livre.find()
    .then(livres => {
        res.send(livres);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving livre."
        });
    });
};

// Find a single livre with a livresId
exports.findOne = (req, res) => {
    Livre.findById(req.params.livreId)
    .then(livre => {
        if(!livre) {
            return res.status(404).send({
                message: "livre not found with id " + req.params.livreId
            });            
        }
        res.send(livre);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "livre not found with id " + req.params.livreId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving livre with id " + req.params.livreId
        });
    });
};

// Update a livre identified by the livreId in the request
exports.update = (req, res) => {
    // Validate Request
    /*if(!req.body.noms) {
        return res.status(400).send({
            message: "livre content can not be empty"
        });
    }*/

    // Find livre and update it with the request body
    Livre.findByIdAndUpdate(req.params.livreId, {
        nom: req.body.nom || "Untitled livre", 
        auteur: req.body.auteur,
        prix: req.body.prix,
        date: req.body.date,
        categorie: req.body.categorie,
        description: req.body.description
    }, {new: true})
    .then(livre => {
        if(!livre) {
            return res.status(404).send({
                message: "livre not found with id " + req.params.livreId
            });
        }
        res.send(livre);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "livre not found with id " + req.params.livreId
            });                
        }
        return res.status(500).send({
            message: "Error updating livre with id " + req.params.livreId
        });
    });
};

// Delete a livre with the specified livreId in the request
exports.delete = (req, res) => {
    Livre.findByIdAndRemove(req.params.livreId)
    .then(livre => {
        if(!livre) {
            return res.status(404).send({
                message: "livre not found with id " + req.params.livreId
            });
        }
        res.send({message: "livre deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "livre not found with id " + req.params.livreId
            });                
        }
        return res.status(500).send({
            message: "Could not delete livre with id " + req.params.livreId
        });
    });
};
