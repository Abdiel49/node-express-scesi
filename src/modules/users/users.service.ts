import usersJson from '../../assets/users.json';
import { IUser, IUserCreate } from '../../types/user.types';
import User from './user.model'

let usersData = usersJson as IUser[];
// const UserRepository = require('../respositories/user.repository.js')

async function getAllUsers () {
  return User.findAll();
}

function getById (id: string) {
  const user = usersData.find(user => user.id === id)
  return user;
}

function createUser (user: IUserCreate) {

  usersData.push({...user, id: Date.now() + ''});
  return user;
}

function updateUser (id: string, userData: IUser) {
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

function deleteUser (id: string) {
  usersData = usersData.filter(user => user.id !== id);
  return {
    "message": "user deleted successfully"
  }
}

export default {
  getAllUsers,
  getById,
  createUser,
  updateUser,
  deleteUser,
}