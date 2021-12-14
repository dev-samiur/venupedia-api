const express= require('express')
const router= express.Router()
const TransactionController= require('../controllers/TransactionController')

router.get('/', TransactionController.getAll)
router.get('/:id', TransactionController.getById)
router.post('/', TransactionController.create)

module.exports= router    