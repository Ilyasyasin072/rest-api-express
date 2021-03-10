
const dbClient = require('./knex');

const db = dbClient('categories');

const Category = require('../models/Category');

const categoryDb = (name, desc) => {

    var data = {
        name: name,
        description: desc
    }
    var category = db.insert(data).onConflict('name').merge();
    return category;
}

const getCategory = () => {
    
    return Category.query().then(category => {
       return category
    })
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

const getCategoryId = id => {

    var category_find_id = Category.query().findById(id);

    return category_find_id;
}

const destroyCategoryId = id => {
    
    var category_destroy = db.where('id', id);
    return category_destroy;
}

module.exports = {
    categoryDb,
    getCategory,
    updateCategory,
    getCategoryId,
    destroyCategoryId
}