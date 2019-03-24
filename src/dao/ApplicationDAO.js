var dbInstance = require('../config/DBConfigMongoDB.js');
var mongoose = require('mongoose');
var applicationConnection;

var createInstance = function() {
    if(applicationConnection)
        return applicationConnection;

    var applicationSchema = new mongoose.Schema({
        name: String,
        keywords: [String]
    });
    applicationConnection = dbInstance.createConnection().model('applications', applicationSchema);
    return applicationConnection;
}

var findAll = function(request, response) {
    createInstance().find(function(err, results) {
        response.send(results);
    });
}

var findByKeyword = function(request, response) {
    var keyword = request.params.keyword;
    createInstance().find({"keywords": {$regex: keyword, $options: 'i'} }, function(err, results) {
        response.send(results);
    });
}

exports.findAll = findAll;
exports.findByKeyword = findByKeyword;