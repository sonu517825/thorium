const express = require('express');
const router = express.Router();
const UserModel = require("../models/userModel.js")
const UserController = require("../controllers/userController")



// intero

router.get('/test-me', function (req, res)
{
    res.send("<h3>This API is dedicated to store the book record on compass.<h2>Author Name : Sonu Verma</h2></h3>")
});



// store the book list in database

router.post("/createBookInfo", UserController.createBookInfo)



// fetch the book list from database

router.get("/getBookInfo", UserController.getBookInfo)

module.exports = router;

