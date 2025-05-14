const express = require('express');
const router = express.Router();
const areaController = require('../controllers/areaController');

router.get('/', areaController.getAll);
router.post('/', areaController.create);

module.exports = router;
