const { Model } = require('objection')

const knex = require('../db/knex')

Model.knex(knex)

class Fleet extends Model {

    static get tableName() {
        return 'fleets'
    }
    // static tableName = 'fleets';

    // Add Eager Loading Relation
    static get relationMappings() {
        const User = require('./User')
        return {
            user : {
                relation: Model.HasOneRelation,
                modelClass: User,
                join: {
                    from: 'fleets.user_id',
                    to: 'users.id'
                }
            }
        }
    }
}


module.exports = Fleet