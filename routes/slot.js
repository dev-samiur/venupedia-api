const express = require('express');
const router = express.Router();
const SlotController = require('../controllers/SlotController');
const upload = require('../middlewares/FileUploadMiddleware');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

router.get('/:id', SlotController.getById);
router.post('/', [AuthMiddleware, upload.any()], SlotController.create);

module.exports = router;
