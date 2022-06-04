const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
    phoneNumber :{
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
        // required : true
    },
    address: addressSchema
}, { timestamps: true });

UserSchema.statics.findUser = async function(email, password) {
  const user = await this.findOne({ email });

  if(user) {
    if(user.status === "pending")
      throw new Error("Please activate your account or register again for the verification link");
    else {
      const auth = await bcrypt.compare(password, user.password);
      console.log("AUTH", auth)
      
      if(auth)
        return user;
      else 
        throw new Error("Invalid Password");
    }
  }
  else
    throw new Error("Invalid Email");
}

UserSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);

    next();
})

module.exports = mongoose.model("User",UserSchema);