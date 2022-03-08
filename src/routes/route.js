const express = require('express');
const router = express.Router();
const productController= require("../controllers/productController")
const userDetailsController= require("../controllers/UserDetailsContollers")
const orderDetailsController= require("../controllers/orderDetailsController.js")
const middlewear=require("../MiddleWear/middlewear.js")


router.get("/test-me", /*middlewear.middlewear1,*/function (req, res) {
    res.send("My first ever api!")
})


// product route
router.post("/createproductDetails", productController.createproductDetails)
router.get("/getproductDetails", productController.getproductDetails)

    

// user route
router.post("/createuserdetails", middlewear.middlewear1 , userDetailsController.createuserDetails)
router.get("/getuserdetails" ,userDetailsController.getuserDetails)


// order route
router.post("/creatorderdetails", middlewear.middlewear1 , orderDetailsController.createorderDetails)
//router.get("/getorderdetails" , orderDetailsController.getorderDetails)



module.exports = router;