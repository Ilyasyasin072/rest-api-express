const { categoryService, getCategoryService } = require('../services/services');


const postCategory = async (req, res, next) => {
    // const { user, content} = req.body;
    var name, desc;

    name = 'asd';
    desc = 'asdasd';
    var category =  await categoryService(name, desc);
    res.json(category);

}

const getCategory = async (req, res, next) => {
     var a = await getCategoryService();
    res.json(a);
}


module.exports = {
    postCategory,
    getCategory
}