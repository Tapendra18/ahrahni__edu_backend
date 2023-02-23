const class11 = require("../models/class11EnquiryModel");
const liveController= {};

liveController.class11Post =  async function(req, res){
    try{
        const class11s = new class11(req.body);
        await class11s.save();
        return res.status(200).send({
            success:true,
            data : class11s
        })
    }catch(err){
        return res.status(500).send({
            success : false,
            msg : err
        })
    }
}

liveController.class11Get = async function(req, res){
    try{
        const class11s= await class11.find();
        return res.status(200).send({
            success:true,
            data: class11s
        })
    }catch(err){
        return res.status(500).send({
            success: false,
            data : err
        })
    }
}

module.exports = liveController;