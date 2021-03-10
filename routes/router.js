const express = require('express');
require('express-group-routes');

const categoryController = require('../controllers/CategoryController');
const customerController = require('../controllers/CustomerController');

const router = express.Router();

router.group('/v1', (router) => {
    
    router.group('/category', (router) => {
        router.get('/data', categoryController.getCategory);
        router.get('/show/:id', categoryController.getCategoryId);
        router.post('/store', categoryController.postCategory);
        router.put('/update/:id', categoryController.updateCategory);
        router.delete('/delete/:id', categoryController.destroyCategoryId);
    })

    router.group('/customer', (router) => {
        router.get('/data', customerController.index)
    })

})

module.exports = router