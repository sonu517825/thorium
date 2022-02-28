const userModel = require("../models/userModel")
const UserModel = require("../models/userModel")

let savedBooks1=[]
const createBookInfo = async function (req, res) {
    let data = req.body
    let flag=false
    let savedBooks
    for(let i=0;i<savedBooks1.length;i++)
    {
        if(data.BookName==savedBooks1[i].BookName)
        {
            res.send("already present")
             flag=true
        }
    }
    if(flag==false)
    {
        savedBooks1.push(data)
        savedBooks=await userModel.create(data)
        res.send({msg:savedBooks})
    }
}

const getBookInfo = async function (req, res) {
    let allBooks = await UserModel.find()
    res.send({ msg: allBooks })
}

module.exports.createBookInfo = createBookInfo
module.exports.getBookInfo = getBookInfo   