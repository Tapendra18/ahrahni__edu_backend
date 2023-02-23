const enquirys = require("../models/enquiryModel");
const liveController = {};

liveController.enquiryPost = async function(req, res){
    try{
        const enquiry = new enquirys(req.body);
        await enquiry.save();
        return res.status(200).send({
            success: true,
            data : enquiry
        })
    }catch(err){
        return res.status(500).send({
            success:false,
            msg : err 
        })
    }
}

liveController.enquiryGet = async function(req, res){
    try{
        const enquiry= await enquirys.find();
        return res.status(200).send({
            success:true,
            data: enquiry
        })
    }catch(err){
        return res.status(500).send({
            success: false,
            data : err
        })
    }
}

module.exports = liveController;