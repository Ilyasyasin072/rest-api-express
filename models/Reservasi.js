const Model = require('objection').Model;

const SoftDelete = require('objection-soft-delete');
const knex = require('../db/knex');

Model.knex(knex);

class Reservasi extends SoftDelete({ columnName: 'deleted' })(Model) {

    static get tableName() {
        return 'reservasi'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [],

            properties: {
                id: { type: 'integer' },
                deleted: { type: 'boolean' },
                tanggal_lahir: { type : 'date'}
            }
        }
    }
}


module.exports = Reservasi;