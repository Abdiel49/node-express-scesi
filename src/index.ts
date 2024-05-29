// imports / requirements
import express from 'express';
import dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import healthRoutes from './routes/healthy.routes';
import usersRoutes from './modules/users/users.routes';
import productsRoutes from './routes/products.routes';


const app = express();
dotenv.config();

// some dependencies and settings
const SERVER_PORT = process.env.NODE_PORT || 3000; 

// configuration for express
app.use(bodyParser.json())

// definitions for express routes
app.get('/', (_req: any, res: any) => {
  res.send("Welcome")
});

// /users
// /products
app.use('/check', healthRoutes)
// app.use('/check', (req, res) => {
//   console.log('request', req.route);
// })
app.use('/users', usersRoutes)
app.use('/products', productsRoutes)

app.use('/*', (req, res) => {
  console.log('request /*', req.route);
  res.status(404).send({
    "message": "route not found"
  })
})
// server listening on port
app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});