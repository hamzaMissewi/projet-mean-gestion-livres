module.exports = (app) => {
    const livres = require('../controllers/livre.controller.js');


    app.post('/livres', livres.create);

    
    app.get('/livres', livres.findAll);

   
    app.get('/livres/:livreId', livres.findOne);

    
    app.put('/livres/:livreId', livres.update);

    
    app.delete('/livres/:livreId', livres.delete);
}
