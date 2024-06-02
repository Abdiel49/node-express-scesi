import usersJson from '../../assets/users.json';
import { IUser, IUserCreate } from '../../types/user.types';
import User, { UserCreationAttributes } from './user.model'

let usersData = usersJson as IUser[];
// const UserRepository = require('../respositories/user.repository.js')

async function getAllUsers () {
  return User.findAll();
}

async function getById (id: number): Promise<User | null> {
  // old versions
  // const user = usersData.find(user => user.id === id)
  // return user;
  const user = await User.findByPk(id);
  return user;
}

async function createUser (user: UserCreationAttributes): Promise<User> {
  // console.log('user service to be created', user);
  // usersData.push({...user, id: Date.now() + ''});
  
  const newUser = await User.create(user);
  return newUser;
}

async function updateUser (id: number, user: Partial<User>) {
  // old code
  // usersData = usersData.map(user => {
  //   if (user.id === id) {
  //     return userData;
  //   }
  //   return user;
  // })
  // return userData;

  return User.update(user, { where: { id } });
}

async function deleteUser (id: string): Promise<number> {
  // old code
  // usersData = usersData.filter(user => user.id !== id);
  // return {
  //   "message": "user deleted successfully"
  // }
  // return {
  //   "message": "user deleted successfully"
  // }

  return  await User.destroy({
    where: {
      id,
    },
  });
}

export default {
  getAllUsers,
  getById,
  createUser,
  updateUser,
  deleteUser,
}