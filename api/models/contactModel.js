const mongoose =  require("mongoose");

const contact = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    email:{
        type:String,
        required:true
    },
    phoneno:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Active" , "Inactive"],
        default:"Active"
    }
} ,{
    timestamps: true
});

module.exports = mongoose.model("contacts", contact);