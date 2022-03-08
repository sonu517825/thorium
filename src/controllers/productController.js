const productModel= require("../models/ProductDetailModel")

const createproductDetails= async function (req, res) {
    let data= req.body
    let savedData= await productModel.create(data)
    res.send("Data Store Successfull Please see product details")
}

const getproductDetails= async function (req, res) {
    let allUsers= await productModel.find()
    res.send({msg: allUsers})
}

module.exports.createproductDetails=createproductDetails
module.exports.getproductDetails=getproductDetails


