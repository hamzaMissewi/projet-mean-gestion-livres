module.exports = (app) => {
    const fournisseurs = require('../controllers/fournisseur.controller.js');


    app.post('/fournisseurs', fournisseurs.create);

    
    app.get('/fournisseurs', fournisseurs.findAll);

   
    app.get('/fournisseurs/:fournisseurId', fournisseurs.findOne);

    
    app.put('/fournisseurs/:fournisseurId', fournisseurs.update);

    
    app.delete('/fournisseurs/:fournisseurId', fournisseurs.delete);
}
