const express = require('express');
const app = express();

const data = [
  {
    name: "John",
    age: 20,
    id: "123",
  },
  {
    name: "Jane",
    age: 25,
    id: "456",
  },
  {
    name: "Mary",
    age: 30,
    id: "789",
  }
]

app.get('/', (req, res) => {
  res.send("Welcome")
});

function itsHealt (req, res) {

  // console.log('req', req.route, req.params, req.body, req.headers, req.url, req.path);
  res.status(200).json({
    status: "ok"
  })
}

app.get('/healt', itsHealt)

app.get('/users', (req, res) => {
  // console.log('req.params', req.params);
  console.log(' req.query',  req.query);

  // TODO: validar si existe la query
  const users = data.filter((user) => {
    return user.age >= req.query.minedad;
  });

  res.status(200).json(users)
})







app.get('/users/:id', (req, res) => {
  console.log('id params', req.params.id);

  const user = data.find((user) => {
    return user.id === req.params.id;
  })

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not found with id: " + req.params.id
    })
  }

  return res.status(200).json(user)
})

const SERVER_PORT = 3000;


app.listen(SERVER_PORT, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port 3000");
  }
});