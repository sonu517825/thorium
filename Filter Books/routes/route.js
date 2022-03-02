const express = require('express');
const router = express.Router();
const BookModel = require("../models/bookModel.js")
const bookController = require("../controllers/bookController");
const bookModel = require('../models/bookModel.js');



// intero
router.get('/test-me', function (req, res)
{
    res.send("<h3>This API is dedicated to store the book record on database and also filter on some conditions.<h2>Author Name : Sonu Verma</h2></h3>")
});




// API 1 : store the book list in database
router.post("/createBook", bookController.createBook)


// fetch all book without filter
router.get("/without",bookController.withoutfilter)



//API 2 : fetch the book list from database on condition
router.get("/bookList", bookController.bookList)



// API 3 : fetch the books on bassics on year
router.post("/yearbook",bookController.yearList)



// API 4 : Get Particular book
router.post("/Getbook",bookController.getbook)



// API 5 : fetch book list if INR is 100 or 200 or 500
router.get("/INRfilter",bookController.listAPI5)



// API 6 : fetch the book list on basics of if page more than 500 or in stock
router.get("/pageCondition",bookController.listAPI6)


module.exports = router;



