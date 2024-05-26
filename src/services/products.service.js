let products = [];

function getProducts () {
  return products;
}

function getById (id) {
  console.log('product by id: ', id);
  console.log('products by id: ', products);
  const product = products.find(product => product.id === id)
  return product;
}

function createProduct (bodyData) {
  const product = {
    "id": products.length + 1,
    "name": bodyData.name,
    "description": bodyData.description,
    "price": bodyData.price,
  }
  products.push(product)
  return product;
}

function updateProduct (id, bodyData) {
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

function deleteProduct (id) {
  products = products.filter(product => product.id!== id);
  return {
    "message": "product deleted successfully"
  }
}

module.exports = {
  getProducts,
  getById,
  createProduct,
  updateProduct,
  deleteProduct,
}