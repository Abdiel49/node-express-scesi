const usersJson = require('../assets/users.json')
let usersData = usersJson
// const UserRepository = require('../respositories/user.repository.js')

function getAllUsers () {
  // const users = UserRepository.getAll()
  // return users
  return usersData;
}

function getById (id) {
  const user = usersData.find(user => user.id === id)
  return user;
}

function createUser (user) {
  usersData.push(user)
  return user;
}

function updateUser (id, userData) {
  // actualizar el usuario // OLD CODE
  // UPDATE: using filter
  // const users = usersData.filter(user => user.id !== userId)
  // users.push(bodyData)
  // usersData = users;

  // UPDATE: using map
  // const users = usersData.map(user => {
  //   if (user.id === userId) {
  //     return bodyData;
  //   }
  //   return user;
  // })
  usersData = usersData.map(user => {
    if (user.id === id) {
      return userData;
    }
    return user;
  })

  // userData = usersData
  return userData;
}

function deleteUser (id) {
  usersData = usersData.filter(user => user.id !== id);
  return {
    "message": "user deleted successfully"
  }
}

module.exports = {
  getAllUsers,
  getById,
  createUser,
  updateUser,
  deleteUser,
}