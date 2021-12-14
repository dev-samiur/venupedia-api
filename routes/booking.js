const express= require('express')
const router= express.Router()
const BookingController= require('../controllers/BookingController')

router.get('/', BookingController.getAll)
router.get('/:id', BookingController.getById)
router.post('/', BookingController.create)

module.exports= router    