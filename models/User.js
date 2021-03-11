const { Model } = require('objection')

const knex = require('../db/knex');

Model.knex(knex)

class User extends Model {

    static get tableName() {
        return 'users'
    }

    static get relationMappings() {
        const Provinsi = require('./Provinsi');
        const Kota = require('./Kota');

        return {
            provinsi : {
                relation: Model.BelongsToOneRelation,
                modelClass: Provinsi,
                join: {
                    from : 'users.id_provinsi',
                    to : 'provinsi.id'
                }
            },
            kota : {
                relation: Model.HasOneRelation,
                modelClass: Kota,
                join: {
                    from : 'users.id_kota',
                    // through: {
                    //     // persons_movies is the join table.
                    //     from: 'kota.id_provinsi',
                    //     to: 'provinsi.id'
                    //   },
                    to : 'kota.id'
                }
            }
        }
    }
}


module.exports = User