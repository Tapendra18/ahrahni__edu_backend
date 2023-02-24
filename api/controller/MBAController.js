const MBA = require("../models/MBAModel");
const liveController = {};

liveController.MBAPost = async function(req, res){
    try{
        const MBAs = new MBA(req.body);
        await MBAs.save();
        return res.status(200).send({
            success : true,
            data :MBAs
        })
    }catch(err){
        return res.status(500).send({
            success : false,
            msg : err
        })
    }
}

liveController.MBAGet = async function(req, res){
    try{
        const MBAs = await MBA.find();
        return res.status(200).send({
            success :true,
            data : MBAs
        })
    }catch(err){
        return res.status(500).send({
            success :false,
            data : err
        })
    }
}

module.exports = liveController;
