import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { UserModel } from "../models/Users.js";
import { LockerModel } from "../models/Lockers.js";
import { ClosetModel } from "../models/Closets.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
    const { firstName, lastName, username, password, email } = req.body;
    try {
        const userExists = await UserModel.findOne({ username });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const model = {
            gender: "tba",
            fullBody: "tba",
        }; //  replace with svg of model*/

        const closet = new ClosetModel({
            numClothes: 0,
            clothes: [],
            favClothes: [],
            wishlist: [],
            owner: username
        });
        await closet.save();

        const locker = new LockerModel({
            numOutfits: 0,
            outfits: [],
            favOutfits: [],
            wishlist: [],
            owner: username
        });
        await locker.save();

        const newUser = new UserModel({
            firstName,
            lastName,
            username,
            password: hashedPassword,
            email,
            bodyModel: model,
            closet: closet._id,
            locker: locker._id
        });
        await newUser.save();

        const token = jwt.sign({ userId: newUser._id }, "secret");
        return res.json({ token, message: "User created successfully, logging in\n Successfully logged in", userId: newUser._id, userDetails: newUser });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await UserModel.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).json({ message: "Incorrect password" });
        }

        const token = jwt.sign({ userId: user._id }, "secret");
        return res.json({ token, message: "Successfully logged in. Welcome " + user.username, userId: user._id });
    } catch (error) {
        console.error("Error logging in:", error);
        return res.status(500).json({ message: "Internal server error: " + error });
    }
});

router.put("/update", async (req, res) => {
    const { userid, fieldToBeUpdated, updatedValue } = req.body;
    try {
        const user = await UserModel.findById(userid);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (typeof updatedValue !== typeof user[fieldToBeUpdated]) {
            return res.status(400).json({ message: `${fieldToBeUpdated} cannot be set to this value` });
        }

        user.set(fieldToBeUpdated, updatedValue);
        await user.save();
        return res.json({ message: `${fieldToBeUpdated} has been updated` });
    } catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

router.get("/", async (req, res) => {
    const { userid } = req.body;
    try {
        const user = await UserModel.findById(userid);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error getting user Data: ", error);
        return res.status(500).json({ message: "Internal Server error" });
    }
})

export { router as userRouter };