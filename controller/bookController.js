const bookService = require("../service/bookService");
const { http } = require("../config");

//Take book name, author, region, city, pincode from frontend/req body
//if request body empty or only pincode provided -> search by pincode(service)
//Follow my pattern of sending response

module.exports.bookRecord = async function (req, res) {
  try {
    const userId = req.userData.id;
    let { isbn, author, title, publication, volume, publishedYear } = req.body;

    if (
      !author ||
      !title
    ){
      return res.status(http.badRequest).send({
        message: res.__("api-400-author-title-mandatory"),
        status: { status: false, count: 0 },
      });
    } else {
      let bookData = {isbn, author, title, publication, volume, publishedYear, userId};  
      let books = await bookService.bookRecord(bookData);
    
      return res.status(http.created).send({
        message: res.__("api-200"),
        data: "Book is saved",
        status: { status: true, count: 0 },
      });
    }

  } catch (error) {
    console.log(error);
    return res.status(http.internalServerError).send({
      message: req.__("api-500"),
      error,
      status: { status: false, count: 0 },
    });
  }
};

module.exports.search = async function (req, res) {
  try {
    const userId = req.userData.id;
    console.log(userId);
    const { author, title, region, city, pincode } = req.body; //Destructuring

    const data = await bookService.search(
      userId,
      author,
      title,
      region,
      city,
      pincode
    );

    return res.status(http.ok).send({
      message: req.__("api-200"),
      data,
      status: { status: true, count: 0 },
    });
  } catch (error) {
    console.log(error);
    return res.status(http.internalServerError).send({
      message: req.__("api-500"),
      error,
      status: { status: false, count: 0 },
    });
  }
};
