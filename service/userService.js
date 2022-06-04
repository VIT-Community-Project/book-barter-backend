const userModel = require('../models/userModel');
const tokenService = require('../service/tokenService');

module.exports.signup = async function (userData) {
    console.log(userData);
    let isRegistered = false;
    let isAccountActive = false;

    let userRecord = await userModel.findOne({
        email: userData.email,
        phoneNumber: userData.phoneNumber
    });

    if(userRecord) {
        isRegistered = true;
        isAccountActive = userRecord.status == "active" ? true : false;

        return { isRegistered, isAccountActive, userRecord };
    } else {
        let newUser = new userModel(userData);
        userRecord = await newUser.save();

        return { isRegistered, isAccountActive, userRecord };
    }
}

module.exports.login = async function (email, password) {
    const user = await userModel.findUser(email, password);
    const token = await tokenService.generateToken(user.id);
    
    return { userId: user.id, token };
}