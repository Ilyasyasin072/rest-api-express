const express = require('express');

const category = require('../controllers/category');

const router = express.Router();

router.post('/category/store', category.postCategory);
router.get('/category/data', category.getCategory);

module.exports = router