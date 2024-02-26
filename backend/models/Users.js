const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    model: {
        type: mongoose.Types.Buffer
    },
    closet: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    locker: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    

});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel
