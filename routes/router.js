const express = require('express');
require('express-group-routes');

const categoryController = require('../controllers/CategoryController');
const customerController = require('../controllers/CustomerController');
const userController = require('../controllers/UserController');
const fletController = require('../controllers/FleetController');

const router = express.Router();

router.group('/v1', (router) => {

    router.group('/user', (router) => {
        router.get('/data', userController.getUser);
        router.get('/show/:id', userController.getUserId);
        
    })
    
    router.group('/category', (router) => {
        router.get('/data', categoryController.getCategory);
        router.get('/show/:id', categoryController.getCategoryId);
        router.post('/store', categoryController.postCategory);
        router.put('/update/:id', categoryController.updateCategory);
        router.delete('/delete/:id', categoryController.destroyCategoryId);
        router.get('/deleted/all', categoryController.softDeleteGet);
    })

    router.group('/customer', (router) => {
        router.get('/data', customerController.index)
        router.post('/store', customerController.store)
        router.put('/update/:id', customerController.update)
        router.get('/show/:id', customerController.show)
        router.delete('/delete/:id', customerController.destroy)
    })

    router.group('/fleet', (router) => {
        router.get('/data', fletController.index);
        router.get('/show/:id', fletController.show);
    })

})

module.exports = router