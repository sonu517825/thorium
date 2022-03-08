const bookModel = require("../models/bookModel")
const BookModel = require("../models/bookModel")



// API 1 : create book in database
const createBook = async function (req, res) {
    let data = req.body
    let savedBooks=await bookModel.create(data)
    res.send({msg:savedBooks})
}



// fetch without filter
const withoutfilter = async function (req, res) {
    let allBooks = await bookModel.find()

    res.send({"Book list without filter" :allBooks })
}


    
// API 2 : fetch details only bookname and author name
const bookList = async function (req, res) {
    let allBooks = await bookModel.find().select ( { BookName: 1, AuthorName: 1} )

    res.send({"Books list on basics on books name and author name" :allBooks })
}



// API 3 : fetch books on basics on year
const yearList=async function(req,res){
    let year1=req.body.year
    let yearbook= await bookModel.find({Year:year1})
    res.send({"books list on basics of year":yearbook})
}



//  API 4 : Get book from regex matching
const getbook=async function(req,res){
    let name=req.body.name
    let Getbook=await bookModel.find({BookName:name})
    res.send({"book list on":Getbook})
}



// API 5 : if INR 100 or 200 or 500
const listAPI5=async function(req,res){
    let bookAPI5= await bookModel.find( { "Price.indianPrice": { $in:["100","200","500"] }} )
    res.send({"books list on if INR more than 100":bookAPI5})
}




// API 6 : if avilable or more than 500 page
const listAPI6=async function(req,res){
    let bookAPI6= await bookModel.find({ $or: [ { StockAvilable:true,TotalPage:{$gte:500 }} ]})
    res.send({"books list on if avilable or more than 500 page":bookAPI6})
}



module.exports.createBook = createBook
module.exports.withoutfilter=withoutfilter
module.exports.bookList = bookList 
module.exports.yearList=yearList
module.exports.listAPI6 = listAPI6
module.exports.listAPI5 = listAPI5
module.exports.getbook = getbook







