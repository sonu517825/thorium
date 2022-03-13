let axios = require("axios")



// find all cities temp. in sorted order

let getTemp = async function (req, res) {

    try {
        let appid = req.query.appid
        let finalRes = []
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow", "Lucknow"]
        for (let i = 0; i < cities.length; i++) {
            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${appid}`
            }
            let result = await axios(options);
            let res = { city: cities[i] }
            res.temp = result.data.main.temp
            finalRes.push(res)
        }
        let Sort = finalRes.sort(check)
        function check(a, b) {
            //return b.temp - a.temp
            return a.temp - b.temp
            //if(a.temp<b.temp)
            //return 1
            //else return -1
        }
        res.status(200).send({ status: true, msg: Sort })
        console.log(finalRes)
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}



module.exports.getTemp = getTemp