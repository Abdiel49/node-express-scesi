import {Router} from 'express';

import healthRoutes from '../modules/healt/healthy.routes';
import usersRoutes from '../modules/users/users.routes';
import productsRoutes from '../modules/products/products.routes';

// import server from './server.config';
const router = Router();

router.use('/check', healthRoutes);
router.use('/users', usersRoutes);
router.use('/products', productsRoutes);

// defult response
router.use('/*', (req, res) => {
  console.log('request /*', req.route);
  res.status(404).send({
    "message": "route not found"
  })
})

export default router;