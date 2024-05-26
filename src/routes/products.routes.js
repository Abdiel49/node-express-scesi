const router = require('express').Router();
const ProductController = require('../controllers/product.controller');

router.get('/', ProductController.getAllProducts)
router.get('/:id', ProductController.getProductById)
router.post('/', ProductController.createProduct)
router.put('/:id', ProductController.updateProduct)
router.delete('/:id', ProductController.deleteProduct)

module.exports = router