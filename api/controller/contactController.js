const contact = require("../models/contactModel");
const liveController = {};

liveController.contactPost = async function (req, res) {
    try {
        const contacts = new contact(req.body);
        await contacts.save();
        return res.status(200).send({
            success: true,
            data: contacts
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err
        })
    }
}

liveController.contactGet = async function (req, res) {
    try {
        const contacts = await contact.find();
        return res.status(200).send({
            success: true,
            data: contacts
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            data: err
        })
    }
}

module.exports = liveController;