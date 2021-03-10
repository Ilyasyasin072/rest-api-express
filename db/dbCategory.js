
// const dbClient = require('./knex');

// const db = dbClient('categories');

const Category = require('../models/Category');

const categoryDb = (name, desc) => {

    var data = {
        name: name,
        description: desc
    }
    // var category = db.insert(data).onConflict('name').merge();
    // return category;

    var category = Category.query().insert(data);
    return category;
}

const getCategory = async () => {

    return data = await Category.query().whereNotDeleted().then(category => {
        return category
     })

    return data;
}

const updateCategory = (name, desc, id) => {

    var getId = parseInt(id);
    
    var data = {
        
        name: name, 

        description: desc
    }
    
    // console.log(data, id);

    // var category = db.where({id: id}).update(data)

    var category = Category.query().findById(getId).patch(data);

    return category;
}

const getCategoryId = id => {

    let getId = parseInt(id);
    
    var category_find_id = Category.query().findById(getId);
    
    return category_find_id;
}

const destroyCategoryId = async (id) => {
    
    var category_destroy = await Category.query().deleteById(id);

    return category_destroy;
}

module.exports = {
    categoryDb,
    getCategory,
    updateCategory,
    getCategoryId,
    destroyCategoryId
}