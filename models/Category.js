const  Model   = require('objection').Model;
// const Model  = require('objection').Model;
const softDelete = require('objection-soft-delete');
const knex = require('../db/knex');

Model.knex(knex);

class Category extends softDelete({ columnName: 'deleted '})(Model) {
// class Category extends Model {
    static get tableName() {
        return 'categories'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
      
            properties: {
              id: { type: 'integer' },
              // matches the columnName passed above
              deleted: { type: 'boolean' },
              // other columns
            },
        }
    }
}

module.exports = Category;