const mongoose =  require("mongoose");
const validator = require("validator");

const ba = new mongoose.Schema({
    name :{
        type:String,
        required: true
    },
    fathername:{
        type:String
    },
    dob:{
        type: String
    },
    mobileno:{
        type : String,
        required:true
    },
    email:{
        type:String,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Not Valid Email");
            }
        }
    },
    collegename:{
        type : String
    },
    alternateno:{
        type: String
    },
    status:{
        type : String,
        enum :["Active", "Inactive"],
        default:"Active"
    }
},{
    timestamps : true
});

module.exports = mongoose.model("BAs" , ba);