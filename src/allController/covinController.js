let axios = require("axios")


// generateOTP

let generateOTP = async function (req, res) {
    try {
        let mobile = req.body
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: mobile
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}



//verifyOTP

let verifyOTP = async function (req, res) {
    try {
        let otp = req.body
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP`,
            data: otp
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}



// show all state list

let StatesList = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



//  show all districk list

let DistrictsList = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        let data = result.data                      
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



// find booking sedule by PINCODE

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}



// find booking sedule by districk 

let getByDicticks = async function (req, res) {
    try {
        let district_id = req.query.district_id
        let date = req.query.date
        console.log(district_id, date)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}



// find all calander by PINCODE

let getClanderByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}



// find all calander by Dictrick_id

let getClanderByDistrick_id = async function (req, res) {
    try {
        let district_id = req.query.district_id
        let date = req.query.date
        console.log(district_id, date)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${district_id}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}



//  all  modules

module.exports.generateOTP = generateOTP
module.exports.verifyOTP = verifyOTP
module.exports.StatesList = StatesList
module.exports.DistrictsList = DistrictsList
module.exports.getByPin = getByPin
module.exports.getByDicticks = getByDicticks
module.exports.getClanderByPin = getClanderByPin
module.exports.getClanderByDistrick_id = getClanderByDistrick_id