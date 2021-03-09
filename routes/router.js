const express = require('express');

const category = require('../controllers/category');

const router = express.Router();

router.post('/category/store', category.postCategory);
router.get('/category/data', category.getCategory);
router.put('/category/update/:id', category.updateCategory);

module.exports = router