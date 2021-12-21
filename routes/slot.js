const express = require('express');
const router = express.Router();
const SlotController = require('../controllers/SlotController');
const upload= require('../middlewares/FileUploadMiddleware')

router.get('/:id', SlotController.getById);
router.post('/', upload.any(), SlotController.create);

module.exports = router;
