const { categoryDb, getCategory } = require('../db/db');

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

module.exports = {
    categoryService,
    getCategoryService
}