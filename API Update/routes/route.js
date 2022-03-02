const express = require('express');
const router = express.Router();
const allController = require('../controllers/allController')


router.get('/Intero',allController.Intero)
router.post('/createNewAuthor', allController.createNewAuthor)
router.get('/watchauthorlist',allController.watchauthorlist)
router.post('/createNewBook', allController.createNewBook)
router.get('/watchbooklist',allController.watchbooklist)
router.get('/allBooks', allController.allBooks)
router.get('/updatedBookPrice', allController.upadatedBookPrice)
router.get('/authorsName', allController.authorsName)

module.exports = router;
