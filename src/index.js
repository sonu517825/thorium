const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect('mongodb://sonu517825:IfIDmIFSv60yUaOw@booklistfilter-1-shard-00-00.btyxh.mongodb.net:27017,booklistfilter-1-shard-00-01.btyxh.mongodb.net:27017,booklistfilter-1-shard-00-02.btyxh.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-3dpygs-shard-0&authSource=admin&retryWrites=true&w=majority' , {
   // useUnifiedTopology : true,
    useNewUrlParser:true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});