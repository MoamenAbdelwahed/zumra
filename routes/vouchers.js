const express = require('express');
const router = express.Router();
const controller = require('../controllers/VoucherController');

router.post('/', controller.create);
router.get('/', controller.findAll);
router.get('/:voucherId', controller.findOne);
router.put('/:voucherId', controller.update);
router.delete('/:voucherId', controller.delete);

module.exports = router;
