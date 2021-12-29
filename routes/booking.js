const express= require('express')
const router= express.Router()
const BookingController= require('../controllers/BookingController')
const AuthMiddleware = require('../middlewares/AuthMiddleware');

router.get('/', BookingController.getAll)
router.get('/:id', BookingController.getById)
router.post('/', AuthMiddleware, BookingController.create)

module.exports= router    