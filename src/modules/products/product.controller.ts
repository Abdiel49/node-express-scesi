import {Request, Response, response} from 'express';
import ProductService from './products.service';

async function getAllProducts (_req: Request, res: Response) {
  try {
    const products = await ProductService.getProducts()
    return res.json(products);
  } catch (error) {
    console.error('Error getting products');
    return res.status(500).send({
      "message": "error getting products"
    })
  }
}

async function getProductById (req: Request, res: Response) {
  try {
    const productId = req.params.id
    
    const product = await ProductService.getById(+productId)
    if (!product) {
      return res.status(404).send({
        "message": "product not found"
      }) 
    }
  
    return res.json(product);
  } catch (error) {
    console.error('error getting product by id', error);
    return res.status(500).send({
      "message": "error getting product by id"
    })
  }
}

async function createProduct (req: Request, res: Response) {
  try {
    const rawProduct = req.body;
    // validate product
  
    // save product
    const product = await ProductService.createProduct(rawProduct)
    return res.status(201).json(product)
  } catch (error) {
    console.error('error creating product', error);
    return res.status(500).send({
      "message": "error creating product"
    })
  }
}

async function updateProduct (req: Request, res: Response) {
  try {
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
  } catch (error) {
    console.error('Error on update product', error);
    return res.status(500).send({
      "message": "error on update product"
    })
  }
}

async function deleteProduct (req: Request, res: Response) {
  try {
    const productId = req.params.id
  
    let product = await ProductService.getById(+productId)
    if (!product) {
      return res.status(404).send({
        "message": "product not found"
      }) 
    }
  
    const response = await ProductService.deleteProduct(+productId)
    return res.json(response)
  } catch (error) {
    console.error('Error on delete product', error);
    return res.status(500).send({
      "message": "error on delete product"
    })
  }
}

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}