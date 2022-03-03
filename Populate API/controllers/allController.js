const authorModel = require('../models/authorsModel')
const bookModel = require('../models/bookModel')
const publisherModel = require('../models/publisher')


// Intero
const Intero=async function(req,res){
    res.send("<h3>This API is dedicated to store the books , publishers , and authors in different models schema and understand refer and populate.<h2>Author Name : Sonu Verma</h2></h3>")
}





// store authors record
const createAuthor = async function (req,res) {
    const Author = req.body;
    const SavedData = await authorModel.create(Author)
    res.send("Data store successfully. To See , refer Watch authors list.")
}
// watch authors list
const showcreateAuthor = async function (req,res) {
    const list = await authorModel.find()
    res.send( {"Authors list is" : list})
}





// store publishers record
const createPublisher = async function (req,res) {
    const publisher = req.body;
    const SavedDatas = await publisherModel.create(publisher)
    res.send("Data store successfully. To See , refer Watch publisher list.")
}
// watch publisher list
const showcreatePublisher = async function (req,res) {
    const lists = await publisherModel.find()
    res.send( {"Publisher list " : lists})
}




// store books
const createbooklist = async function (req,res) {
    const Book = req.body;
    let authorId = req.body.author
    let publisherId = req.body.publisher
    if(!authorId)
    {
        res.send("Request not valid. Auther details is require")
    }
    let author=await authorModel.findById(authorId)
    if(!author)
    {
        res.send("No author is present")
    }
    if(!publisherId)
    {
        res.send("Request not valid. Publisher details is required")
    }
    let publisher=await publisherModel.findById(publisherId)
    if(!publisher)
    {
        res.send("no publisher is present") 
    }
    const Saved = await bookModel.create(Book)
    res.send( "Data store successfully. To See , refer Watch book list.")
}
// watch book list
const showcreatebooklist = async function (req,res) {
    const booklist = await bookModel.find()
    res.send( {"Book list is" : booklist})
}


// all book list of 
const allBooks = async function(req, res) {
    const booksName = await bookModel.find().populate('author publisher')
    res.send( {"All books with auther and publisher":booksName})
}


module.exports.Intero=Intero
module.exports.createAuthor = createAuthor
module.exports.showcreateAuthor=showcreateAuthor
module.exports.createPublisher = createPublisher
module.exports.showcreatePublisher = showcreatePublisher
module.exports.createbooklist=createbooklist
module.exports.showcreatebooklist=showcreatebooklist
module.exports.allBooks = allBooks

