const mongoose = require('mongoose');
const objectid=mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema(
    {
        
        userId:
        {
            type:objectid,
            ref: "UserDetails"
        },
        productId:
        {
            type:objectid,
            ref:"productDetails"
        },
        amount:
        {
            type:Number,
            default:00
        },
        isFreeAppUser:
        {
            type : Boolean
        },
        date:
        {
            type:Date,
            default:Date.now()
        } 
        
    }, { timestamps: true });

module.exports = mongoose.model('OrderDetails', orderSchema) 
