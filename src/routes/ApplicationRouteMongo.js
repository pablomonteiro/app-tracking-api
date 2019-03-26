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
    });

    app.put('/application/v1/removeKeyword/:id/:keyword', function(request, response) {
        applicationDAO.removeKeywordByApplication(request, response);
    });

    app.put('/application/v1/addKeyword/:id/:keyword', function(request, response) {
        applicationDAO.addKeywordByApplication(request, response);
    });

    app.post('/application/v1/newApplication', function(request, response) {
        applicationDAO.saveNewApplication(request, response);
    });

    app.delete('/application/v1/deleteApplicationById/:id', function(request, response) {
        applicationDAO.deleteApplicationById(request, response);
    });

}