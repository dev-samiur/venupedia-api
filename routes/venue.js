const express = require('express');
const router = express.Router();
const VenueController = require('../controllers/VenueController');
const upload = require('../middlewares/FileUploadMiddleware');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

router.get('/', VenueController.getAll);
router.get('/:id', VenueController.getById);
router.get('/owner/:id', AuthMiddleware, VenueController.getByOwner);
router.post('/', [AuthMiddleware, upload.any()], VenueController.create);
router.delete('/:id', AuthMiddleware, VenueController.remove);

module.exports = router;
