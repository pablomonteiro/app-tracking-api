var app = require('./src/config/ExpressConfig')();

app.listen(3000, function() {
    console.log('Server Started...')
});