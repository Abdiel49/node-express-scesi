// imports / requirements
const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser')

// routes imports / requirements
const healthRoutes = require('./routes/healthy.routes');
const usersRoutes = require('./routes/users.routes');


// some dependencies and settings
const SERVER_PORT = process.env.NODE_PORT || 3000; 

// configuration for express
app.use(bodyParser.json())

// definitions for express routes
app.get('/', (req, res) => {
  res.send("Welcome")
});

// /users
// /products
app.use('/check', healthRoutes)
app.use('/users', usersRoutes)

// server listening on port
app.listen(SERVER_PORT, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on port ${SERVER_PORT}`);
  }
});