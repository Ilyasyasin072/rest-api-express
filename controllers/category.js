const { categoryService, getCategoryService } = require('../services/services');


// const postCategory = async (req, res, next) => {
//     const { user, content} = req.body;
//     try {
//         await createCategory(user, content)

//         res.sendStatus(201)
//         next()
//     } catch (e) {
//         console.log(e.message)
//         res.sendStatus(500) && next(error);
//     }
// }

const getCategory1 = async (req, res, next) => {
    // console.log(createCategory);
     var a = await getCategoryService();
    res.json(a);
}


module.exports = {
    // postCategory,
    getCategory1
}