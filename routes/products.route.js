const express = require('express');
const router = express.Router();
const ProductController = require('../app/controllers/productsController');


router.get('/:target', ProductController.showBrand);

module.exports = router;
