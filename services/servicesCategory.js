const { 
        
        categoryDb, 
        getCategory, 
        updateCategory, 
        getCategoryId, 
        destroyCategoryId,
        getCategorySoft

    } = require('../db/dbCategory');

const categoryService = async (name, desc) => {
   
    try {
   
        return await categoryDb(name, desc)
   
    } catch (error) {
   
        throw new Error(error.message)
   
    }
}

const getCategoryService = async() => {

    var category_get = await getCategory();

    return category_get;
}


const softCategoryService = async() => {

    var category_soft_delete = await getCategorySoft();

    return category_soft_delete
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
    destroyCategoryService,
    softCategoryService,
}