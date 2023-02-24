const Bcom = require("../models/BcomModel");
const liveController = {};

liveController.BcomPost = async function (req, res) {
    try {
        const Bcoms = new Bcom(req.body);
        await Bcoms.save();
        return res.status(200).send({
            success: true,
            data: Bcoms
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err
        })
    }
}

liveController.BcomGet = async function (req, res) {
    try {
        const Bcoms = await Bcom.find();
        return res.status(200).send({
            success: true,
            data: Bcoms
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            data: err
        })
    }
}

module.exports = liveController;