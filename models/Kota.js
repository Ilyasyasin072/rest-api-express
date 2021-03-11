const Model = require('objection').Model;

const SoftDelete = require('objection-soft-delete');

const knex = require('../db/knex');

Model.knex(knex);


class Kota extends SoftDelete ({ columnName: 'deleted' })(Model) {

    static get tableName() {
        return 'kota'
    }
}


module.exports = Kota