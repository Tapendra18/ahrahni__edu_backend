const class12 =  require("../models/class12EnquiryModel");
const liveController = {};

liveController.class12Post =  async function(req, res){
    try{
        const class12s = new class12(req.body);
        await class12s.save();
        return res.status(200).send({
            success : true,
            data : class12s
        })
    }catch(err){
        return res.status(500).send({
            success: false,
            msg : err
        })
    }
}

liveController.class12Get =  async function(req, res){
    try{
        const class12s = await class12.find();
        return res.status(200).send({
            success : true,
            data : class12s
        })
    }catch(err){
        return res.status(500).send({
            success : false,
            data : err
        })
    }
}

module.exports = liveController;