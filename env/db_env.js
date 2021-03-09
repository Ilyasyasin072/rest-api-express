module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'logistik-db',
            charset: 'utf8'
        },
        pool: {
            min: 2,
            max: 10
        }
    },
}