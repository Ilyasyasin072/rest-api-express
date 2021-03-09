
const dbClient = require('./knex');

const db = dbClient('categories');

const categoryDb = (name, desc) => {

    var data = {
        name: name,
        description: desc
    }
    var category = db.insert(data)
    return category;
}

const getCategory = () => {
    let category = db;
    return category;
}

module.exports = {
    categoryDb,
    getCategory
}