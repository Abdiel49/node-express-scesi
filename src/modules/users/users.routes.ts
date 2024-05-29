import {Router} from 'express'
import UserController from './users.controller';

const router = Router();
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.delete('/:id', UserController.deleteUser);
router.put('/:id', UserController.updateUser);
// ===== request ===== 
// TODO: patch/:id => actualizar parcialmente el usuario 
// post => guardar usuario ✅
// put/:id => actualizar todo el usuario ✅
// delete/:id => eliminar el usuario ✅

export default router;