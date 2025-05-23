import { DB_HOST, MYSQL_DATABASE, MYSQL_USER } from "../../config/env.config";
import { IProduct, IProductCreate } from "../../types";
/* The line `import { ProductModel } from "./product.model";` is importing the `ProductModel` class
from the `product.model.ts` file in the same directory. This allows the current file to use the
functionalities and methods defined in the `ProductModel` class. */
// import { ProductModel } from "./product.model";
import mysql from 'mysql2/promise';


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

async function createProduct (bodyData: IProductCreate) {
  try {
    
    const connection = await mysql.createConnection({
      host: DB_HOST,
      user: MYSQL_USER,
      database: MYSQL_DATABASE,
    });
  
    const product = {
      "id": Date.now(),
      "name": bodyData.name,
      "description": bodyData.description,
      "price": bodyData.price,
      "create_at": new Date(),
      "update_at": new Date(),
    }

    // await connection.query('CREATE TABLE IF NOT EXISTS products (id INT PRIMARY KEY, name VARCHAR(255), description TEXT, price DECIMAL(10, 2), create_at DATETIME, update_at DATETIME)');

    // const [results, fields] = await connection.query(
    //   'INSERT INTO products (id, name, description, price, create_at, update_at) VALUES (?, ?, ?, ?, ?, ?)',
    //   [product.id, product.name, product.description, product.price, product.create_at, product.update_at],
    // );
  
    // const poductModel = new ProductModel(
    //   bodyData.name,
    //   bodyData.description,
    //   bodyData.price,
    // ).create(bodyData);
  
    // products.push(product)
    return product;
  } catch (error) {
    console.error('Error creating product:', error);
    throw new Error('Error creating product');
  }
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