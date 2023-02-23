const colleges = require("../models/college");
const liveController = {};

liveController.collegePost =  async function(req, res){
    try{

        if (req.files.image) {
            req.body.image = req.files.image[0].path
        }
        const college = new colleges(req.body );
        await college.save();
        return res.status(200).send({
            success :true,
            data :college
        })
    } catch(err){
        return res.status(500).send({
            success :false,
            msg : err +  "not Working"
        })
    }
}

module.exports = liveController;