const { 
        categoryDb, 
        getCategory, 
        updateCategory, 
        getCategoryId, 
        destroyCategoryId 
    } = require('../db/db');

const categoryService = async (name, desc) => {
    try {
        return await categoryDb(name, desc)
    } catch (error) {
        throw new Error(error.message)
    }
}

const getCategoryService = async() => {
    var a = await getCategory();
    return a;
}

const updateCategoryService = async(name, description, id) => {
    var category = await updateCategory(name, description, id)
    return category;
}

const getCategoryById = async(id) => {
    var category = await getCategoryId(id);
    return category;
}

const destroyCategoryService = async(id) => {
    var destroy_category = await destroyCategoryId(id);
    return destroy_category;
}

module.exports = {
    categoryService,
    getCategoryService,
    updateCategoryService,
    getCategoryById,
    destroyCategoryService
}