const mongoose =  require("mongoose");
const validator=  require("validator");

const class12 = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    fathername :{
        type : String,
    },
    dob:{
        type : String
    },
    mobileno:{
        type : String
    },
    email:{
        type : String,
        validator(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Not Valid Email");
            }
        }
    },
    schoolname: {
        type : String
    },
    alternateno:{
        type :String
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    },
} ,{
    timestamps : true
});

module.exports = mongoose.model("class12s" , class12);