const Model = require('objection').Model;

const SoftDelete = require('objection-soft-delete');

const knex = require('../db/knex');

Model.knex(knex);


class Kota extends SoftDelete ({ columnName: 'deleted' })(Model) {

    static get tableName() {
        return 'kota'
    }

    static get relationMappings() {
        const Provinsi = require('./Provinsi')

        return {
            provinsi : {
                relation : Model.BelongsToOneRelation,
                modelClass: Provinsi,
                join: {
                    from: 'kota.id_provinsi',
                    to: 'provinsi.id'
                }
            }
        }
    }
}


module.exports = Kota