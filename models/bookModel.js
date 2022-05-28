const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    ISBN :{
        type : String,
        required : true
    },
    Author : {
        type : String,
        required : true
    },
    Title : {
        type : String,
        required : true
    },
    Publication :{
        type : String,
        required : true
    },
    Volume : {
        type : String,
        required : true
    },
    Published_Year : {
        type : String,
        required : true
    },
    User_Id : mongoose.SchemaTypes.ObjectId,
});

module.exports = mongoose.model("Book",BookSchema);