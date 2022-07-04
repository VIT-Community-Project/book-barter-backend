const bookModel = require('../models/bookModel');

module.exports.bookRecord = async function (bookData) {
    // console.log(bookData);
    let newBook = new bookModel(bookData);
        bookStatus = await newBook.save();
}

module.exports.search = async function(){
    let author = req.body.author;
    const writer = await bookModel.find(author);

    let book = req.body.title;
    const title = await bookModel.find(book);
}