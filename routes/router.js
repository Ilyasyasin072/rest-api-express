const express = require('express');
require('express-group-routes');

const category = require('../controllers/category');

const router = express.Router();

router.group('/v1', (router) => {
    
    router.group('/category', (router) => {
        router.get('/data', category.getCategory);
        router.get('/show/:id', category.getCategoryId);
        router.post('/store', category.postCategory);
        router.put('/update/:id', category.updateCategory);
        router.delete('/delete/:id', category.destroyCategoryId);
    })

})

module.exports = router