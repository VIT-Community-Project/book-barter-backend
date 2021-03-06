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

    if (userRecord) {
        isRegistered = true;
        isAccountActive = userRecord.status == "active" ? true : false;

        return { isRegistered, isAccountActive, userRecord };
    } else {
        let newUser = new userModel(userData);
        userRecord = await newUser.save();

        const token = await tokenService.generateToken(userRecord.id);
        return { isRegistered, isAccountActive, userRecord, token };
    }
}

module.exports.login = async function (email, password) {
    const user = await userModel.findUser(email, password);
    const token = await tokenService.generateToken(user.id);

    return { userId: user.id, token };
}

module.exports.activate = async function (userId) {
    let accountActive = false;
    let userRecord = await userModel.findByIdAndUpdate({ _id: userId }, { status: "activate" });

    if(userRecord) {
        accountActive = true;
    }

    return accountActive;
}