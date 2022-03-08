const mongoose = require('mongoose')
const { head } = require('../routes/route')
const objectid=mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({
    name:String,
	author:{
        type:objectid,
        required:true,
     ref: "newAuthor"

    },
	price:
  {
  type:Number,
  ref:"newAuthor"
  },
	ratings:Number,
	publisher: {
        type:objectid,
        required:true,
       ref: "newPublisher"
    }
},
{timestamps:true})

module.exports = mongoose.model('newBook',bookSchema)






