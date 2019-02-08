var postgres = require('pg-promise')({});

//'postgres://postgres:123@localhost:5432/app_tracking';
var _connection_development = {
    host: 'localhost', // 'localhost' is the default;
    port: 5432, // 5432 is the default;
    database: 'app_tracking',
    user: 'postgres',
    password: '123'
}

var client;

function createDBConnection() {
	client = postgres(_connection_development);
	client.connect();
	console.log('Conexão realizada com sucesso!');
}

var createSingleConnection = function getSingleConnection() {
	if(!client) {
		createDBConnection();
    }
	return client;
}

exports.createSingleConnection = createSingleConnection;

