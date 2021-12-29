const express= require('express')
const router= express.Router()
const BookingController= require('../controllers/BookingController')
const AuthMiddleware = require('../middlewares/AuthMiddleware');

router.get('/', AuthMiddleware, BookingController.getAll)
router.get('/:id', AuthMiddleware, BookingController.getById)
router.post('/', AuthMiddleware, BookingController.create)

module.exports= router    