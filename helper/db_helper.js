const client = module.exports = require('mysql').createConnection({
    user: 'root',
    password: '',
    database: 'logistik-db',
    debug: true,
});

client.connect();