import { IProduct, IProductCreate } from "../../types";

let products: IProduct[] = [];

function getProducts () {
  return products;
}

function getById (id: number) {
  console.log('product by id: ', id);
  console.log('products by id: ', products);
  const product = products.find(product => product.id === id)
  return product;
}

function createProduct (bodyData: IProductCreate) {
  const product = {
    "id": Date.now(),
    "name": bodyData.name,
    "description": bodyData.description,
    "price": bodyData.price,
  }
  products.push(product)
  return product;
}

function updateProduct (id: number, bodyData: IProductCreate) {
  let productUpdated;

  const newProducts = products.map(product => {
    if (product.id === id) {
      productUpdated = {
       ...bodyData,
        id,
      };
      return productUpdated;
    }
    return product
  })

  products = newProducts;

  return productUpdated;
}

function deleteProduct (id: number) {
  products = products.filter(product => product.id!== id);
  return {
    "message": "product deleted successfully"
  }
}

export default {
  getProducts,
  getById,
  createProduct,
  updateProduct,
  deleteProduct,
}