const UserService = require('../services/users.service');

function getAllUsers (_req, res) {
  const users = UserService.getAllUsers()
  return res.json(users);
}

function getUserById (req, res) {
  // estraer los datos de la request
  const userId = req.params.id
  // buscar los datos
  // const user = usersData.find(user => user.id === userId)
  const user = UserService.getById(userId)

  // responder con el usuario
  if (!user) {
    return res.status(404).send({
      "message": "user not found"
    }) 
  }

  return res.json(user)
}

function createUser (req, res) {
  // estraer los datos de la request
  const bodyData = req.body;
  console.log('bodyData', bodyData);
  // validar los datos del usuario
  const user = UserService.createUser(bodyData);
  // responder con el usuario creado satisfied
  return res.status(201).json(user)
}

function updateUser (req, res) {
  // estraer los datos de la request
  const userId = req.params.id
  const bodyData = req.body;

  // TODO: validar los datos del usuario
  // validar que el usuario con el ID existe
  let user = UserService.getById(userId)
  if (!user) {
    return res.status(404).send({
      "message": "user not found"
    }) 
  }

  user = UserService.update(id, bodyData);
  return res.send(bodyData)
}

function deleteUser (req, res) {
  // estraer los datos de la request
  const userId = req.params.id

  // validar que el usuario con el ID existe
  let user = UserService.getById(userId)
  if (!user) {
    return res.status(404).send({
      "message": "user not found"
    }) 
  }

  // eliminar el usuario
  const deleted = UserService.deleteUser(userId)

  // responder con el usuario creado satisfied
  return res.status(200).json(deleted)
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
}