const CS = require("../models/CSModel");
const liveController = {};

liveController.CSPost = async function (req, res) {
    try {
        const CSs = new CS(req.body);
        await CSs.save();
        return res.status(200).send({
            success: true,
            data: CSs
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err
        })
    }
}

liveController.CSGet = async function (req, res) {
    try {
        const CSs = await CS.find();
        return res.status(200).send({
            success: true,
            data: CSs
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            data: err
        })
    }
}

module.exports = liveController;