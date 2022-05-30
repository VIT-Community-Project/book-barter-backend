const userModel = require('../models/userModel');

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