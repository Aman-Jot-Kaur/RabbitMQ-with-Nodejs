const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({

    uuid: {
        type: String,
        unique:true,
        required: [true, "uuid is required"]
    }, 
    userinfo: {
        email: { type: String,   required: [true, "email is required"] },
        password: { type: String,   required: [true, "password is required"] },
       
      },
  });
const UserModel = mongoose.model("user", userSchema)
module.exports = UserModel