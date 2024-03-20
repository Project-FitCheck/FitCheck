import express from "express";
import { UserModel } from "../models/Users.js"

const router = express.Router();

router.get("/", async (req, res) => {
    const {userId} = req.query;
     try {
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found " + userId });
        }
        const model = user.bodyModel;
        return res.status(200).json(model);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error: " + err + " " + userId });
    }
});

/*
req: {
    userId: userId
    model: {
        gender: MALE | FEMALE
        head: head_svg_string,
        leftArm: left_arm_svg_string,
        rightArm: right_armsvg_string, 
        torso: torso_svg_string,
        legs: legs_svg_string,
        feet: feet_svg_string,
        fullBody: 
    }
}
*/
router.put("/create", async (req, res) => {
    const { userId, modelData } = req.body;
    try {
        const user = await UserModel.findById(userId)
        if (!user) {
            console.log("user doesn't exist");
            return res.status(404).json({ message: "User not found" })
        }
        user.bodyModel = modelData;

        await user.save();

        return res.status(200).json({ message: "User model has now been created", });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error: " + err })
    }
});

/*
req: {
    userid: user_id
    model: {
        gender: MALE | FEMALE
        head: head_svg_string,
        leftArm: left_arm_svg_string,
        rightArm: right_arm_svg_string, 
        torso: torso_svg_string,
        legs: legs_svg_string,
        feet: feet_svg_string,
        fullBody: full_body_svg_string
    }
}
*/
router.put("/update", async (req, res) => {
    const { userId, newModel } = req.body;
    try {
        const user = await UserModel.findById(userId)
        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }
        user.bodyModel = newModel;
        await user.save();
        return res.status(200).json({ message: "User model has now been updated" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" })
    }
});

export { router as modelRouter };