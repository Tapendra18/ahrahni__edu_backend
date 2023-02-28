const colleges = require("../models/college");
const liveController = {};

liveController.collegePost = async function (req, res) {
    try {

        if (req.files.image) {
            req.body.image = req.files.image[0].path
        }
        const college = new colleges(req.body);
        await college.save();
        return res.status(200).send({
            success: true,
            data: college
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err + "not Working"
        })
    }
}

liveController.collegeGet = async function (req, res) {
    try {
        const college = await colleges.find();
        return res.status(200).send({
            success: true,
            data: college
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            data: err
        })
    }
}

liveController.CollegeDelete = async function (req, res) {
    try {
        const college = await colleges.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(400).send();
        }
        res.send(college);

    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err + "error in delete API"
        })
    }
}

liveController.collegeEdit = async function (req, res) {
    try {

        const degree = await colleges.findOne({
            '_id': req.params.id
        });
        const udegree = await colleges.findByIdAndUpdate(
            { '_id': degree.id }, { $set: req.body }, { new: true }
        )
        return res.status(200).send({
            success: true,
            msg: 'college successfully update.',
            data: udegree
        })
    } catch (err) {
        res.status(400).send({
            success: false,
            msg: err
        })
    }
}

module.exports = liveController;