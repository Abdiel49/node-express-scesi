import {Request, Response} from 'express';
import ProductService from './products.service';

function getAllProducts (_req: Request, res: Response) {
  const products = ProductService.getProducts()
  return res.json(products);
}

function getProductById (req: Request, res: Response) {
  const productId = req.params.id
  
  const product = ProductService.getById(+productId)
  if (!product) {
    return res.status(404).send({
      "message": "product not found"
    }) 
  }

  return res.json(product);
}

function createProduct (req: Request, res: Response) {
  const product = ProductService.createProduct(req.body)
  return res.status(201).json(product)
}

function updateProduct (req: Request, res: Response) {
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

function deleteProduct (req: Request, res: Response) {
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

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}