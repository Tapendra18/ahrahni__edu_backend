const CA = require("../models/CAModel");
const liveController = {};

liveController.CAPost = async function (req, res) {
    try {
        const CAs = new CA(req.body);
        await CAs.save();
        return res.status(200).send({
            success: true,
            data: CAs
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err
        })
    }
}

liveController.CAGet = async function (req, res) {
    try {
        const CAs = await CA.find();
        return res.status(200).send({
            success: true,
            data: CAs
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            data: err
        })
    }
}

module.exports = liveController;