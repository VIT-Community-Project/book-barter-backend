const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      pincode: {
        type: String,
        required: true,
      },
    }, { _id: false }
);

const UserSchema = new Schema({
    name :{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone_Number :{
        type : Number,
        required : true
    },
    password : {
        type : String,
        required : true,
        minlength: 6
    },
    status: {
        type: String,
        enum: ["active", "pending"],
        default: "pending",
        required: true,
    },
    pendingOffers : {
        type : String,
        required : true
    },
    address: addressSchema
}, { timestamps: true });

module.exports = mongoose.model("User",UserSchema);