import {Request, Response, response} from 'express';
import ProductService from './products.service';

async function getAllProducts (_req: Request, res: Response) {
  const products = await ProductService.getProducts()
  return res.json(products);
}

async function getProductById (req: Request, res: Response) {
  const productId = req.params.id
  
  const product = await ProductService.getById(+productId)
  if (!product) {
    return res.status(404).send({
      "message": "product not found"
    }) 
  }

  return res.json(product);
}

async function createProduct (req: Request, res: Response) {
  const rawProduct = req.body;
  // validate product

  // save product
  const product = await ProductService.createProduct(rawProduct)
  return res.status(201).json(product)
}

async function updateProduct (req: Request, res: Response) {
  const productId = req.params.id
  const rawProduct = req.body
  // validate product
  console.log('product to update', rawProduct);

  let product = await ProductService.getById(+productId)
  if (!product) {
    return res.status(404).send({
      "message": "product not found"
    }) 
  }

  const response =  await ProductService.updateProduct(+productId, rawProduct)
  return res.json(response)
}

async function deleteProduct (req: Request, res: Response) {
  const productId = req.params.id

  let product = await ProductService.getById(+productId)
  if (!product) {
    return res.status(404).send({
      "message": "product not found"
    }) 
  }

  const response = await ProductService.deleteProduct(+productId)
  return res.json(response)
}

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}