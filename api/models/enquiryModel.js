const mongoose = require("mongoose");
const validator = require("validator");


const enquiry = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    fathername: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    mobileno: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        validator(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Not Valid Email");
            }
        }
    },
    collegename: {
        type: String,
        required: true
    },
    coursename: {
        type: String,
        required: true
    },
    alternateno: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    },

});

module.exports = mongoose.model("enquiry", enquiry);