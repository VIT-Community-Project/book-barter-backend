const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    isbn :{
        type : String,
        required : true
    },
    userId: {
        type: String,
        // required: true
    },
    author : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    publication :{
        type : String,
        // required : true
    },
    volume : {
        type : String,
        // required : true
    },
    published_Year : {
        type : String,
        // required : true
    },
}, { timestamps: true });

module.exports = mongoose.model("Book",BookSchema);