const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
{
    BookName:{
        type:String,
        required:true
    },
    AuthorName:{
        type:String,
        required:true
    },
    Category:String,
    Year:String
},
{timestamps:true});

module.exports=mongoose.model('User',userSchema) //users








