import express from "express";
import { UserModel } from "../models/Users"

const router = express.Router();

router.get("/model", async (req, res) => {
    const userid = req.body;
    const user = await UserModel.findById(userid);
    const model = await user.get("model").fullBody;
    res.status(200).json(model);
});

/*
req: {
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
router.post("/model", async (req, res) => {
    const modelDetails = req.body;
    const user = await UserModel.findOne({modelDetails})
    if (modelDetails) {
        res.json({ message: "User already has a model" });
    }
    user.model = modelDetails;
    await user.save();
    res.json({message: "User model has now been created"});
});

/*
UPDATED
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
        fullBody: 
    }
}
*/
router.put("/model/update", async (req, res) => {
    const {userId, newModel} = req.body;
    const user = await UserModel.findById({userId})

    user.model = newModel;
    await user.save();
    res.json({message: "User model has now been updated"});
});

export { router as modelRouter };