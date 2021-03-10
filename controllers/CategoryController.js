const { categoryService, 
        getCategoryService, 
        updateCategoryService, 
        getCategoryById,
        destroyCategoryService,
        softCategoryService,
     } = require('../services/servicesCategory');

const Category = require('../models/Category');

const postCategory = async (req, res, next) => {
    const { name, desc} = req.body;
    

    try {
        var category =  await categoryService(name, desc);
        res.json(category);
    } catch (error) {
        res.json(error.message);    
    }

}

const getCategory = async (req, res, next) => {
    
    try {

        var category = await getCategoryService()
        
        res.json(category);
    
    } catch (error) {
        
        res.json(error.message);
    }
}


const softDeleteGet = async (req, res, next) => {

    try {
        var category = await softCategoryService();

        res.json(category);

    } catch (error) {
        
        res.json(error.messages);
    }
}


const updateCategory = async (req, res) => {

    const { name, desc } = req.body;
    const getId = parseInt(req.params.id);
    
    try {
      
        var category = await updateCategoryService(name, desc, getId);
      
        res.json(category);
    
    } catch (error) {

        res.json(error.message);
        
    }
}

const getCategoryId = async (req, res, next) => {
    
    const id = req.params.id;
    
    const category = await getCategoryById(id);
    
    next();
    
    res.json(category);
}

const destroyCategoryId = async (req, res) => {

    const id = req.params.id;
    // console.log(id);

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
    get,
    softDeleteGet
}