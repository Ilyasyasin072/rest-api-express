const { categoryService, 
        getCategoryService, 
        updateCategoryService, 
        getCategoryById,
        destroyCategoryService,
     } = require('../services/services');

const Category = require('../models/Category');

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

const getCategoryId = async (req, res, next) => {
    const id = req.params.id;
    const category = await getCategoryById(id);
    next();
    res.json(category);
}

const destroyCategoryId = async (req, res) => {

    const id = req.params.id;
    console.log(id);

    try {
        const category_destroy = await destroyCategoryService(id)
        res.set('Content-Type', 'application/json');
        res.json(category_destroy)
    } catch (error) {
        res.json(error.message)    
    }

    // next();
}

const get = async (req, res) => {
    Category.query().then(category => {
        res.json(category);
    })
}


module.exports = {
    postCategory,
    getCategory,
    updateCategory,
    getCategoryId,
    destroyCategoryId,
    get
}