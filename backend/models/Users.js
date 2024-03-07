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
        bsonType: binData
    },
    closet: {
        bsonType: objectId,
        required: true
    },
    locker: {
        bsonType: objectId,
        required: true
    }

});

const UserModel = mongoose.model("FitCheck0", UserSchema);
module.exports = UserModel