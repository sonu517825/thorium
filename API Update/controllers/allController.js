const authorModel = require('../models/authorsModel')
const bookModel = require('../models/bookModel')



// Intero
const Intero=async function(req,res){
    res.send("<h3>This API is dedicated to store the books and authors in different models schema.<h2>Author Name : Sonu Verma</h2></h3>")
}


// store authors record
const createNewAuthor = async function (req,res) {
    const Author = req.body;
    const SavedData = await authorModel.create(Author)
    res.send("Data store successfully. To See , refer Watch authors list.")
}



// watch authors list
const watchauthorlist = async function (req,res) {
    const list = await authorModel.find()
    res.send( {"Authors list is" : list})
}



// store books
const createNewBook = async function (req,res) {
    const Book = req.body;
    const Saved = await bookModel.create(Book)
    res.send( "Data store successfully. To See , refer Watch book list.")
}



// watch book list
const watchbooklist = async function (req,res) {
    const booklist = await bookModel.find()
    res.send( {"Book list is" : booklist})
}


// all book list of chetan bhagat
const allBooks = async function(req, res) {
    let arr=[]
    const authorDetails = await authorModel.find({author_name: "Cheatan Bhagat"})
    for(let i=0;i<authorDetails.length;i++)
    {
        const id = authorDetails[i].author_id
        const booksName = await bookModel.find({author_id: id}).select({name:1 , _id:0})
        arr.push(booksName)
    }
    res.send( {"All books of chetan bhagat":arr})
}



// Update in price
const upadatedBookPrice = async function (req, res) {
    const bookDetails = await bookModel.find({name:"Two states"})
    const id = bookDetails[0].author_id
    const bkName = bookDetails[0].name
    const authorN = await authorModel.find({author_id:id}).select({author_name:1 , _id:0})
    const updatedPrice = await bookModel.findOneAndUpdate({name:bkName}, {price:100},{new:true}).select({price:1 , _id:0})
    //res.send({"Updated price is": updatedPrice})
    res.send({"Authors Name ":authorN})
}



//
const authorsName = async function (req,res) {
    const booksId= await bookModel.find({price: {$gte:50, $lte:100}}).select({author_id:1,_id:0})
    const id = booksId.map(inp => inp.author_id)
    // const allAuthorNames= id.map(x => {
    //   return authorModel.find({author_id:x}).select({author_name:1, _id:0})
    //})
    //res.send({msg:allAuthorNames})
    let temp =[]
    for(let i=0; i<id.length; i++) {
        let x = id[i]
        const author = await authorModel.find({author_id:x}).select({author_name:1, _id:0})
        temp.push(author)
    }

   //const authorName = temp.flat()

  res.send({msg:temp})
}


module.exports.Intero=Intero
module.exports.createNewAuthor = createNewAuthor
module.exports.watchauthorlist=watchauthorlist
module.exports.createNewBook = createNewBook
module.exports.watchbooklist=watchbooklist
module.exports.allBooks = allBooks
module.exports.upadatedBookPrice = upadatedBookPrice
module.exports.authorsName = authorsName