const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({

    uuid: {
        type: String,
        unique:true,
        required: [true, "uuid is required"]
    }, 
 data: {
        type: Array,
        required: [true, "data is required"]
    },
})
const UserModel = mongoose.model("user", userSchema)
module.exports = UserModel