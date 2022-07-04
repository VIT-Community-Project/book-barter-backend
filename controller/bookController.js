const bookService = require("../service/bookService");
const { http } = require("../config");

//Take book name, author, region, city, pincode from frontend/req body
//if request body empty or only pincode provided -> search by pincode(service)
//Follow my pattern of sending response

module.exports.bookRecord = async function (req, res) {
    try {
        let { isbn, author, title, publication, volume, publishedYear } = req.body;

        if (
            !isbn ||
            !author ||
            !title ||
            !publication ||
            !volume ||
            !publishedYear
        ) {
            return res.status(http.badRequest).send({
                message: res.__("api-400-all-field-mandatory"),
                status: { status: false, count: 0 }
            });
        }else{
            return res.status(http.created).send({
                message: res.__("api-200"),
                data: "Book is saved",
                status: { status: true, count: 0 },
            });
        }
        let bookData = { isbn, author, title, publication, volume, publishedYear };

        let bookStatus = await bookService.bookRecord(bookData);
        console.log(bookStatus);
        return bookStatus;

    } catch (error) {
        console.log(error);
        return res.status(http.internalServerError).send({
            message: req.__("api-500"),
            error,
            status: { status: false, count: 0 },
        });
    }
}

module.exports.search = async function (req, res) {
    try{
        const author = await bookService.search();
        const title = await bookService.search();
        if(author){
            return res.status(http.ok).send({
                message: req.__("Author"),
                data: author,
                status: { status: true, count: 0 }
            });
        }

        
        if(title){
            return res.status(http.ok).send({
                message: req.__("Title"),
                data: author,
                status: { status: true, count: 0 }
            });
        }
    }catch (error) {
        console.log(error);
        return res.status(http.internalServerError).send({
            message: req.__("api-500"),
            error,
            status: { status: false, count: 0 },
        });
    }




}