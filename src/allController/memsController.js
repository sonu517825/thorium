let axios = require("axios")



    // get mems

let getMems = async function (req, res) {

    try {
        let template_id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password
        let options = {
            method: 'get',
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=sonu517825&password=Sonu@638771`
        }
        let result = await axios(options);
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getMems=getMems