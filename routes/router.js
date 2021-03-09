const express = require('express');

const category = require('../controllers/category');

const router = express.Router();

// router.post('/category', category.postCategory);
router.get('/category/data', category.getCategory1);

module.exports = router