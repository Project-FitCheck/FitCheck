import mongoose from "mongoose";

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
    bodyModel: {
        gender: {
            type: String
        },
        head: {
            type: String
        },
        leftArm: {
            type: String
        },
        rightArm: {
            type: String
        },
        torso: {
            type: String
        },
        legs: {
            type: String
        },
        feet: {
            type: String
        },
        fullBody: {
            type: String
        },
    },
    closet: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    locker: {
        type: mongoose.Types.ObjectId,
        required: true
    }
});

const UserModel = mongoose.model("User", UserSchema);
export { UserModel };

