const express = require('express');
const router = express.Router();
const TransactionController = require('../controllers/TransactionController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

router.get('/', AuthMiddleware, TransactionController.getAll);
router.get('/:id', AuthMiddleware, TransactionController.getById);
router.post('/', TransactionController.create);

module.exports = router;
