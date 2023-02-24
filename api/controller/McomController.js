const Mcom = require("../models/McomModel");
const liveController = {};

liveController.McomPost = async function (req, res) {
    try {
        const Mcoms = new Mcom(req.body);
        await Mcoms.save();
        return res.status(200).send({
            success: true,
            data: Mcoms
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err
        })
    }
}

liveController.McomGet = async function (req, res) {
    try {
        const Mcoms = await Mcom.find();
        return res.status(200).send({
            success: true,
            data: Mcoms
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            data: err
        })
    }
}

module.exports = liveController;