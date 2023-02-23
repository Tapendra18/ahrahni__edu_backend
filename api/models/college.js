const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);


const college = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
    ,
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    }
    ,
    slug: {
        type: String,
        slug: "name"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("colleges", college);