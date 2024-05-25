const router = require('express').Router();
const UserController = require('../controllers/users.controller')

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

module.exports = router;