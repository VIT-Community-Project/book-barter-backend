const { query } = require('express');
const bookModel = require('../models/bookModel');
const userModel = require('../models/userModel');
const userService = require('./userService');

module.exports.bookRecord = async function (bookData) {
    // console.log(bookData);
    let newBook = new bookModel(bookData);
    let books = await newBook.save();
}

module.exports.search = async function(userId, author, title, region, city, pincode){
    let query = {}, userDetail, bookData;

    // userDetail = bookModel.find(userId)
    userBookId = await bookModel.find({ userId }, { userId: 1, _id: 0 });
    userDetail = await userModel.find({ pincode })

    console.log(userBookId, userDetail);


    if(pincode && !author && !title && !region && !city){
        query.pincode = pincode;
    }
    //if nothing exists -> search by pincode(by default)
    if(author) {
        query.author = author
    }
    if(title) {
        query.title = title;
    }
    if(region) {
        query.region = region;
    }
    if(city) {
        query.city = city;
    }

    bookData = bookModel.find(query);

    return bookData;
}
