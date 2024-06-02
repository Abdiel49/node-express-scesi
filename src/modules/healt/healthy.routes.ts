import {Router} from 'express';
import * as HealtController from './healthy.controller';

const router = Router()
// define routes
router.get('/healthy', HealtController.getHealthStatusController)

// export router
export default router;