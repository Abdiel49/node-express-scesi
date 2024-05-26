const ProductService = require('../services/products.service');

function getAllProducts (req, res) {
  const products = ProductService.getProducts()
  return res.json(products);
}

function getProductById (req, res) {
  const productId = req.params.id
  
  const product = ProductService.getById(+productId)
  if (!product) {
    return res.status(404).send({
      "message": "product not found"
    }) 
  }

  return res.json(product);
}

function createProduct (req, res) {
  const product = ProductService.createProduct(req.body)
  return res.status(201).json(product)
}

function updateProduct (req, res) {
  const productId = req.params.id

  let product = ProductService.getById(+productId)
  if (!product) {
    return res.status(404).send({
      "message": "product not found"
    }) 
  }

  product = ProductService.updateProduct(+productId, req.body)
  return res.json(product)
}

function deleteProduct (req, res) {
  const productId = req.params.id

  let product = ProductService.getById(+productId)
  if (!product) {
    return res.status(404).send({
      "message": "product not found"
    }) 
  }

  const response = ProductService.deleteProduct(+productId)
  return res.json(response)
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}