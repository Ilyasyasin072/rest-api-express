const { Model } = require('objection')

const knex = require('../db/knex')

Model.knex(knex)

class Customer extends Model {
    
    static get tableName() {
        return 'customers'
    }

}

module.exports = Customer