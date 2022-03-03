const mongoose = require('mongoose')
const objectid=mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({
    name:String,
	author:{
        type:objectid,
        required:true,
      ref: "newAuthor"
    },
	price:Number,
	ratings:Number,
	publisher: {
        type:objectid,
        required:true,
       ref: "newPublisher"
    }
},
{timestamps:true})

module.exports = mongoose.model('newBook',bookSchema)


