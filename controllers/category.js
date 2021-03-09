const { categoryService, getCategoryService, updateCategoryService } = require('../services/services');


const postCategory = async (req, res, next) => {
    const { name, desc} = req.body;
    var category =  await categoryService(name, desc);
    res.json(category);

}

const getCategory = async (req, res, next) => {
     var category = await getCategoryService();
    res.json(category);
}

const updateCategory = async (req, res) => {

    const { name, desc } = req.body;
    // console.log(name, desc, req.params.id);
    var category = await updateCategoryService(name, desc, req.params.id);
    res.json(category);
}


module.exports = {
    postCategory,
    getCategory,
    updateCategory
}