var mongoose = require('mongoose');

var dbClient;

var createConnection = function() {
    mongoose.connect('mongodb://localhost:27017/app_tracking', {useNewUrlParser: true});
    mongoose.set('debug', false); //exibe consultas no log.
    return mongoose;
}

exports.createConnection = createConnection;