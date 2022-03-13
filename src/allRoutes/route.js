const express = require('express');
const router = express.Router();
const covinController=require("../allController/covinController")
const TempController=require("../allController/tempController")
const memsController=require("../allController/memsController")






router.get("/test-me", function (req, res) {
    res.send("My first ever project!")
})


// covin_API

router.post("/generateOTP",covinController.generateOTP)
router.post("/verifyOTP",covinController.verifyOTP)
router.get("/cowin/statesList", covinController.StatesList)
router.get("/cowin/districtsList/:stateId", covinController.DistrictsList)
router.get("/cowin/getByPin",covinController.getByPin)
router.get("/covin/getByDisticks",covinController.getByDicticks)
router.get("/covin/getClanderByPin",covinController.getClanderByPin)
router.get("/covin/getClanderbydistrick_id",covinController.getClanderByDistrick_id)


//temprecture & Mems API

router.get("/getTemp",TempController.getTemp)
router.post("/mems",memsController.getMems)



module.exports = router;