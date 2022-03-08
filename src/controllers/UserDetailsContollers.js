const userModel= require("../models/UserDetailsModel")

const createuserDetails= async function (req, res ) {
    let data= req.body
    let savedData= await userModel.create(data)
    res.send("data store successfully please see userdetails")
}

const getuserDetails= async function (req, res) {
    let userdetails= await userModel.find()
    res.send({msg : userdetails})
}


/*
const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE


*/
module.exports.createuserDetails = createuserDetails
module.exports.getuserDetails = getuserDetails
//module.exports.updateBooks= updateBooks
//module.exports.deleteBooks= deleteBooks
