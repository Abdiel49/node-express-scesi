const router = require('express').Router();
const HealtController = require('../controllers/healthy.controller')

// define routes
router.get('/healthy', HealtController.getHealthStatusController)


// export router
module.exports = router;