const router = require('express').Router();
const UserController = require('../controllers/users.controller');
const logger = require('../middleware/logger');
const validateUser = require('../middleware/validateUser');

//middlewares
router.use(logger) 
// router.use(validateUser); // middleware global para todas las rutas

router.get('/', validateUser, UserController.getAllUsers); // middleware para cada ruta
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.delete('/:id', validateUser, UserController.deleteUser);
router.put('/:id', UserController.updateUser);
// ===== request ===== 
// TODO: patch/:id => actualizar parcialmente el usuario 
// post => guardar usuario ✅
// put/:id => actualizar todo el usuario ✅
// delete/:id => eliminar el usuario ✅

module.exports = router;