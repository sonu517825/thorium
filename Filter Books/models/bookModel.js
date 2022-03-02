const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
{
    BookName:{
        type:String,
        required:true
    },
    AuthorName:{
        type:String,
        required:true
    },
    Price:{
        indianPrice:String,
        uropianPrice:String
    },
    Year:{
        type:Number,
        default:2021
    },
    tags:[],
    TotalPage:Number,
    StockAvilable:Boolean,
    Category:String
},
{timestamps:true});

module.exports=mongoose.model('booklist',bookSchema) //users








