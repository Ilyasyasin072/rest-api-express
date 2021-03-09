
const dbClient = require('./knex');

const db = dbClient('categories');

const categoryDb = (name, desc) => {

    var data = {
        name: name,
        description: desc
    }
    var category = db.insert(data).onConflict('name').merge();
    return category;
}

const getCategory = () => {
    let category = db;
    return category;
}

const updateCategory = (name, desc, id) => {
    
    var data = {
        name: name, 
        description: desc
    }
    
    console.log(data, id);

    var category = db.where({id: id}).update(data)

    return category;
}

module.exports = {
    categoryDb,
    getCategory,
    updateCategory
}