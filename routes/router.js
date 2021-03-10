const express = require('express');
require('express-group-routes');

const categoryController = require('../controllers/CategoryController');

const router = express.Router();

router.group('/v1', (router) => {
    
    router.group('/category', (router) => {
        router.get('/data', categoryController.getCategory);
        router.get('/show/:id', categoryController.getCategoryId);
        router.post('/store', categoryController.postCategory);
        router.put('/update/:id', categoryController.updateCategory);
        router.delete('/delete/:id', categoryController.destroyCategoryId);
    })

})

module.exports = router