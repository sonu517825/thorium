const express = require('express');
const app = express()
const address = require('address') 



var count=0
const globalmiddlewere = function(req, res, next)
{

    // counting 
    count=count+1
    // date stamping
    let date_ob = new Date()
    let date = ("0" + date_ob.getDate()).slice(-2)
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2)
    let year = date_ob.getFullYear()

    
    // time stamping
    let hours = ("0"+date_ob.getHours()).slice(-2)
    let minutes =("0" + date_ob.getMinutes()).slice(-2)
    let seconds =("0"+ date_ob.getSeconds()).slice(-2)



    // YYYY-MM-DD    HH:MM:SS    IP     Router   
   console.log(year + "-" + month + "-" + date + " , " + hours + " : " + minutes + " : " + seconds + " , " + address.ip() + " , " + req.originalUrl);
   console.log("API HIT : ",count)
   next()
}

    // Apply Globally
app.use(globalmiddlewere)



    // types of route
app.get('/home',function(req ,res){
    res.send("this is home")
})


app.get('/login',function(req ,res){
    res.send("this is login")
})


app.get('/about',function(req ,res){
    res.send("this is about")
})


    // Server details
app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
