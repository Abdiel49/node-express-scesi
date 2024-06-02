// import { IProduct, IProductCreate } from "../../types";
import Product, { ProductCreationAttributes } from "./product.model";

// old DB xD
// let products: IProduct[] = [];

async function getProducts () {
  return await Product.findAll();
}

async function getById (id: number): Promise<Product | null> {
  // old code
  // const product = products.find(product => product.id === id)
  // return product;
  const product = await Product.findByPk(id);
  return product;
}

async function createProduct (product: ProductCreationAttributes): Promise<Product> {
  // old code
  // const product = {
  //   "id": Date.now(),
  //   "name": bodyData.name,
  //   "description": bodyData.description,
  //   "price": bodyData.price,
  // }
  // products.push(product)
  // return product;
  const newProduct = await Product.create(product)
  return newProduct;
}

function updateProduct (id: number, product: Partial<Product>) {
  // let productUpdated;
  // const newProducts = products.map(product => {
  //   if (product.id === id) {
  //     productUpdated = {
  //      ...bodyData,
  //       id,
  //     };
  //     return productUpdated;
  //   }
  //   return product
  // })
  // products = newProducts;
  // return productUpdated;
  return Product.update(product, { where: { id } });
}

async function deleteProduct (id: number) {
  // old code
  // products = products.filter(product => product.id!== id);
  // return {
  //   "message": "product deleted successfully"
  // }
  const response = await Product.destroy({ where: { id } });
  return response;
}

export default {
  getProducts,
  getById,
  createProduct,
  updateProduct,
  deleteProduct,
}