const express = require('express');
const router = express.Router();
const allController = require('../controllers/allController')


router.get('/Intero',allController.Intero)


router.post('/createAuthor', allController.createAuthor)
router.get('/showcreateAuthor', allController.showcreateAuthor)


router.post('/createPublisher', allController.createPublisher)
router.get('/showcreatePublisher', allController.showcreatePublisher)


router.post('/createbooklist',allController.createbooklist)
router.get('/showcreatebooklist',allController.showcreatebooklist)


router.get('/allBooks', allController.allBooks)


router.put('/ishardcoverUpdate',allController.putupdate)
router.put('/ratingUpdate',allController.ratingUpdate)


module.exports = router;
