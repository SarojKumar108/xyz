const express = require('express');
const router = express.Router();
const { createProduct, getAllProducts, getProductById, updateProductById,deleteProductById } = require('../controllers/productController');

// POST /products
router.post('/', createProduct);
// GET /products
router.get('/', getAllProducts);
// GET /products/:id
router.get('/:id', getProductById);
// PUT /products/:id
router.put('/:id', updateProductById);
// DELETE /products/:id
router.delete('/:id', deleteProductById);


module.exports = router;
