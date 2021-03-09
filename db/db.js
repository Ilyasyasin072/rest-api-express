
const dbClient = require('./knex');

const categoryDb = (user, content) => {

}

const getCategory = () => {
    let category = dbClient('categories');
    return category;
}

module.exports = {
    categoryDb,
    getCategory
}