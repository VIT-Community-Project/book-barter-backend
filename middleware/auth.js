const jwt = require('jsonwebtoken');
const { http } = require('../config');
const authService = require('../service/authService');

async function auth (req, res, next) {
    try {
        const token = req.header('Authorization').replace("Bearer ", "");
        const decoded = jwt.verify(token, process.env.SECRET_JWT);
        const user = await authService.findUser(decoded);
        
        req.userData = {
            id: user.id
        }
        next();
    } catch (error) {
        return res.status(http.unauthorized).send({
            message: ('unauthorizedAPIRequest'),
            error,
            status: { status: false, count: 0 }
        })
    }
}

module.exports = auth;