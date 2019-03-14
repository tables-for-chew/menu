const router = require('express').Router();
const controller = require('./controllers/controllers.js');

router.get('/menu/bundle', controller.bundle);
router.get('/:restaurantId/menu', controller.get);
router.post('/:restaurantId/menu', controller.post);
router.put('/:restaurantId/menu', controller.put);
router.delete('/:restaurantId/menu', controller.delete);

module.exports = router; 