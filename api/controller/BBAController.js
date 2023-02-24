const BBA = require("../models/BBAModel");
const liveController = {};

liveController.BBAPost = async function (req, res) {
    try {
        const BBAs = new BBA(req.body);
        await BBAs.save();
        return res.status(200).send({
            success: true,
            data: BBAs
        })
    }catch(err){
        return res.status(500).send({
            success : false,
            msg : err
        })
    }
}

liveController.BBAGet = async function(req, res){
    try{
        const BBAs =  await BBA.find();
        return res.status(200).send({
            success : true,
            data : BBAs
        })
    }catch(err){
        return res.status(500).send({
            success :false,
            data : err
        })
    }
}

module.exports = liveController;