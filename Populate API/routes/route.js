const express = require('express');
const router = express.Router();
const allController = require('../controllers/allController')
//const express = require('express');
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



app.use(globalmiddlewere)
router.get('/Intero',allController.Intero)


router.post('/createAuthor', allController.createAuthor)
router.get('/showcreateAuthor', allController.showcreateAuthor)


router.post('/createPublisher', allController.createPublisher)
router.get('/showcreatePublisher', allController.showcreatePublisher)


router.post('/createbooklist',allController.createbooklist)
router.get('/showcreatebooklist',allController.showcreatebooklist)


router.get('/allBooks', allController.allBooks)

module.exports = router;
