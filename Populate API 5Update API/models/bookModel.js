const mongoose = require('mongoose')
const objectid=mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({
    name:String,
	author:{
        type:objectid,
        required:true,
      ref: "UpdateAuthor"
    },
	price:Number,
	ratings:Number,
	publisher: {
        type:objectid,
        required:true,
       ref: "UpdatePublisher"
    }
},
{timestamps:true})

module.exports = mongoose.model('UpdateBook',bookSchema)


