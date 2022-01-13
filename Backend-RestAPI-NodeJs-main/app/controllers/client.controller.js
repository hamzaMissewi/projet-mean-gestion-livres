const Client = require('../models/client.model.js');

// Create and Save a new client
exports.create = (req, res) => {
    // Validate request
    if(!req.body.nom) {
        return res.status(400).send({
            message: "client content can not be empty"
        });
    }

    // Create a client
    const client = new Client({
        nom: req.body.nom || "Untitled Client", 
        adresse: req.body.adresse,
        codepost: req.body.codepost,
        ville: req.body.ville,
        pays: req.body.pays,
        telep: req.body.telep,
        email: req.body.email,
        image: req.body.image
        
    });

    // Save client in the database
    client.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the client."
        });
    });
};

// Retrieve and return all client from the database.
exports.findAll = (req, res) => {
    Client.find()
    .then(clients => {
        res.send(clients);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving clients."
        });
    });
};

// Find a single client with a clientId
exports.findOne = (req, res) => {
    Client.findById(req.params.clientId)
    .then(client => {
        if(!client) {
            return res.status(404).send({
                message: "client not found with id " + req.params.clientId
            });            
        }
        res.send(client);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "client not found with id " + req.params.clientId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving client with id " + req.params.clientId
        });
    });
};

// Update a client identified by the clientId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.nom) {
        return res.status(400).send({
            message: "client content can not be empty"
        });
    }

    // Find client and update it with the request body
    Client.findByIdAndUpdate(req.params.clientId, {
        nom: req.body.nom || "Untitled Client", 
        adresse: req.body.adresse,
        codepost: req.body.codepost,
        ville: req.body.ville,
        pays: req.body.pays,
        telep: req.body.telep,
        email: req.body.email,
        image: req.body.image
    }, {new: true})
    .then(client => {
        if(!client) {
            return res.status(404).send({
                message: "client not found with id " + req.params.clientId
            });
        }
        res.send(client);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "client not found with id " + req.params.clientId
            });                
        }
        return res.status(500).send({
            message: "Error updating client with id " + req.params.clientId
        });
    });
};

// Delete a client with the specified clientId in the request
exports.delete = (req, res) => {
    Client.findByIdAndRemove(req.params.clientId)
    .then(client => {
        if(!client) {
            return res.status(404).send({
                message: "client not found with id " + req.params.clientId
            });
        }
        res.send({message: "client deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "client not found with id " + req.params.clientId
            });                
        }
        return res.status(500).send({
            message: "Could not delete client with id " + req.params.clientId
        });
    });
};
