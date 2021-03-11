const Model = require('objection').Model;

const SoftDelete = require('objection-soft-delete');
const knex = require('../db/knex');

Model.knex(knex);

class Reservasi extends SoftDelete({ columnName: 'deleted' })(Model) {

    static get tableName() {
        return 'reservasi'
    }

    // RELATION MAPPING

    static get relationMappings() {
        
        const User = require('./User');
        const Kamar = require('./Kamar');
        
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'reservasi.user_id',
                    to: 'users.id'
                }
            },
            kamar: {
                relation: Model.BelongsToOneRelation,
                modelClass: Kamar,
                join: {
                    from: 'reservasi.id_kamar',
                    to : 'kamar.id'
                }
            }
        }
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [],

            properties: {
                id: { type: 'integer' },
                deleted: { type: 'boolean' },
            }
        }
    }
}


module.exports = Reservasi;