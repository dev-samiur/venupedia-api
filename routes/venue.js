const express = require('express');
const router = express.Router();
const VenueController = require('../controllers/VenueController');
const upload = require('../middlewares/FileUploadMiddleware');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

router.get('/', VenueController.getAll);
router.get('/:id', VenueController.getById);
router.post('/', [AuthMiddleware, upload.any()], VenueController.create);

module.exports = router;
