const { categoryDb, getCategory } = require('../db/db');

const categoryService = async () => {
    try {
        return await categoryDb(user, content)
    } catch (error) {
        throw new Error(e.message)
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