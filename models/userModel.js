const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    address : {
        type : String,
        street : {
            type : String,
            // required : true
        },
        city : {
            type : String,
            // required : true
        },
        PIN : {
            type : String,
            // required : true
        },
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone_Number :{
        type : Number,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    pending_Offers : {
        type : String,
        required : true
    }
}, { timestamps: true });

module.exports = mongoose.model("User",UserSchema);