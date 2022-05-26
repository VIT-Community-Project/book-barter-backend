const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Name :{
        type : String,
        required : true
    },
    Address : {
        type : String,
        streat : {
            type : String,
            required : true
        },
        city : {
            type : String,
            required : true
        },
        PIN : {
            type : String,
            required : true
        },
        required : true
    },
    Email : {
        type : String,
        required : true
    },
    Phone_Number :{
        type : Number,
        required : true
    },
    Password : {
        type : String,
        required : true
    },
    Pending_Offers : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("User",UserSchema);