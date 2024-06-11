import e, {Request, Response} from 'express'
import UserService from './users.service';

async function getAllUsers (_req: Request, res: Response) {
  try {
    const users = await UserService.getAllUsers()
    return res.json(users);
  } catch (error) {
    console.error('Error getting users', error);
    return res.status(500).send({
      "message": "error getting users"
    })
  }
}

async function getUserById (req: Request, res: Response) {
  try {
    // extraer los datos de la request
    const userId = req.params.id
    // buscar los datos
    // const user = usersData.find(user => user.id === userId)
    const user = await UserService.getById(+userId)
  
    // responder con el usuario
    if (!user) {
      return res.status(404).send({
        "message": "user not found"
      }) 
    }
  
    return res.json(user)
  } catch (error) {
    console.error('Failed to get user');
    return res.status(500).send({
      "message": "failed to get user"
    })
  }
}

async function createUser (req: Request, res: Response) {
  try {
    // estraer los datos de la request
    const bodyData = req.body;
    console.log('bodyData', bodyData);
    // validar los datos del usuario
    const user = await UserService.createUser(bodyData);
    // responder con el usuario creado satisfied
    return res.status(201).json(user)
  } catch (error) {
    console.error('Error on creare user', error);
    return res.status(500).send({
      "message": "error on creare user"
    })
  }
}

async function updateUser (req: Request, res: Response) {
  try {
    // estraer los datos de la request
    const userId = req.params.id
    const bodyData = req.body;
  
    // TODO: validar los datos del usuario
    // validar que el usuario con el ID existe
    let user = await UserService.getById(+userId)
    if (!user) {
      return res.status(404).send({
        "message": "user not found"
      }) 
    }
  
    const response = await UserService.updateUser(+userId, bodyData);
    return res.status(200).json(response)
  } catch (error) {
    console.error("Error updating user", error);
    return res.status(500).send({
      "message": "error updating user"
    })
  }
}

async function deleteUser (req: Request, res: Response) {
  try {
    // estraer los datos de la request
    const userId = req.params.id
  
    // validar que el usuario con el ID existe
    let user = UserService.getById(+userId)
    if (!user) {
      return res.status(404).send({
        "message": "user not found"
      }) 
    }
  
    // eliminar el usuario
    const deleted = await UserService.deleteUser(userId)
  
    // responder con el usuario creado satisfied
    return res.status(200).json(deleted)
  } catch (error) {
    console.error("Error on delete user", error);
    return res.status(500).send({
      "message": "error on delete user"
    })
  }
}

export default {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
}