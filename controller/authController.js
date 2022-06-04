const userService = require("../service/userService");
const { http } = require("../config");

module.exports.signup = async function (req, res) {
    try {
        let { street, city, country, state, pincode, name, email, phoneNumber, password } = req.body;

        if(
            !street ||
            !city ||
            !country ||
            !state ||
            !pincode ||
            !name ||
            !email ||
            !phoneNumber ||
            !password
        ) {
            return res.status(http.badRequest).send({
                message: res.__("api-400-all-field-mandatory"),
                status: { status: false, count: 0 }
            });
        }
    
        let userData = {name, email, phoneNumber, password, 
            address: { street, city, country, state, pincode }};

        let userStatus = await userService.signup(userData);

        if(!userStatus.isRegistered || (userStatus.isRegistered && !userStatus.isAccountActive)) {
            return res.status(http.created).send({
                message: res.__("api-200"),
                data: { user: userStatus.userRecord, token: userStatus.token },
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
}

module.exports.login = async function (req, res) {
    try {
        const { email, password } = req.body;
        if(!email || !password) {
            res.status(http.badRequest).send({
                message: req.__("api-400"),
                status: { status: false, count: 0 }
            });
        }

        const userData = await userService.login(email, password);
        
        if(userData) {
            return res.status(http.ok).send({
                message: req.__("login"),
                data: userData,
                status: { status: true, count: 0 }
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
}