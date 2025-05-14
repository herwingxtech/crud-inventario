const express = require('express');
const router = express.Router();
const ipController = require('../controllers/ipController');

router.get('/', ipController.getAll);
router.post('/', ipController.create);

module.exports = router;
