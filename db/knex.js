const environment = process.env.ENVIRONMENT || 'development'
const config = require('../env/db_env')[environment];
module.exports = require('knex')(config);