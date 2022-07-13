const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    isbn: {
      type: String,
      // required: true,
    },
    userId: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    publication: {
      type: String,
      // required : true
    },
    volume: {
      type: String,
      // required : true
    },
    publishedYear: {
      type: String,
      // required : true
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("Book", bookSchema);
