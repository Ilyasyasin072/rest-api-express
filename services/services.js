const { categoryDb, getCategory, updateCategory } = require('../db/db');

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

module.exports = {
    categoryService,
    getCategoryService,
    updateCategoryService
}