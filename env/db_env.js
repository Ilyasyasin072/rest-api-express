module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'db-reservasi',
            charset: 'utf8'
        },
        pool: {
            min: 2,
            max: 10
        }
    },
}