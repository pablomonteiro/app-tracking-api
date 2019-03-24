var applicationDAO = require('../dao/ApplicationDAO.js');

module.exports = function(app) {

    app.get('/application/v1/all', function(request, response) {
        applicationDAO.findAll(request, response);
    });

    app.get('/application/v1/findByKeyword/:keyword', function(request, response) {
        applicationDAO.findByKeyword(request, response);
    });

    app.get('/application/v1/findApplicationById/:id', function(request, response) {
        applicationDAO.findApplicationById(request, response);
    })

}