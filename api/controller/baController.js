const ba = require("../models/baModelEnquiry");
const liveController = {};

liveController.baPost = async function (req, res) {
    try {
        const bas = new ba(req.body);
        await bas.save();
        return res.status(200).send({
            success: true,
            data: bas
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err
        })
    }
}

liveController.baGet = async function (req, res) {
    try {
        const bas = await ba.find();
        return res.status(200).send({
            success: true,
            data: bas
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            data: err
        })
    }
}

module.exports = liveController;