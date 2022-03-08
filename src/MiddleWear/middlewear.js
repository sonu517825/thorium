const middlewear= require("../MiddleWear/middlewear.js")
//const authorModel = require('../models/authorsModel')
//const OrderPurchageModel = require("../models/OrderPurchageModel.js")
//const bookModel = require('../models/bookModel')
//const publisherModel = require('../models/publisher')





/* This is another method here we send hadder waya code in postman body


// API 3
/*
let middlewear2= async function(req, res, next){
    req.headers.isFreeAppUser = 'isFreeAppUser'
    
    // check hadder
    if(req.headers.isFreeAppUser=='isFreeAppUser')
    {}
    else
    res.send("Hadder is not present")

 
    // check validation
    if(req.headers.isFreeAppUser=='isFreeAppUser')
    {
        let userId = req.body.author.userId
        let productId = req.body.productId

        // check user id
        if(!userId)
        {
            res.send("Request not valid. userId is required")
        }

        // check product id
        if(!productId)
        {
            res.send("Request not valid. productId is required")
        }

        // check user in database
        let user =await userDetailsModel.findById(userId)
        if(!user)
        {
            res.send("No user is present")
        }

        // check product in database
        let product=await productDetailsModel.findById(productId)
        if(!product)
        {
            res.send("no product is present") 
        }
    }


    // check hadder value
    req.headers.isFreeAppUser = 'false'//'true'
    if( req.headers.isFreeAppUser==false)
    {
        let productPrice = product.price
        let userbalance=user.balance

        // check balance
        if(productPrice>userbalance)
        {
            res.send("insufficient ballance")
        }
        else
        {
            
            // update user balance isfreeAppUser default false
            let remainingUserBalance = userbalance-productPrice
            const a=await userDetailsModel.updateMany(
            { user: { $in: userId } },
            { balance:remainingUserBalance })
        }
    }
    else // if isfreeAppUser == true only update isfreeAppUser == true , amount default 00 , ballance no change
    {
        const b=await userDetailsModel.updateMany(
        { user: { $in: userId } },
        { isFreeAppUser:true })
    }

    // all condition satisfy order successfull
    let order=req.body
    const SavedOrder = await OrderPurchageModel.create(order)
    res.send({"Order Successfull ":SavedOrder})

}*/
//module.exports.middlewear1=middlewear1
//module.exports.middlewear2=middlewear2








// in this method we send hadder waya postman body


const middlewear1 = function (req, res, next){
    let data = req.headers
    console.log(data)
  
  
   if(data.hasOwnProperty("isfreeappuser") === false){
       res.send({error : "the request is missing a mandatory header" })
   }else {
       next()
   }

}

module.exports.middlewear1=middlewear1

