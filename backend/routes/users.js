import express from "express";
import bcrypt from "bcrypt";
import UserModel from "../models/Users";
import LockerModel from "../models/Lockers";
import ClosetModel from "../models/Closets"

const router = express.Router();

router.post("/signup", async (req, res) => {
    const {firstName, lastName, username, password, email} = res.body;
    const user = await UserModel.findOne({username});
    if (user) {
        res.json({message: "User already exists"});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const model = <SVGAElement></SVGAElement>;

    const closet = new ClosetModel({numClothes: 0, clothes: [], favClothes: [],
                                     wishlist: [], owner: username});
    await closet.save();

    const locker = new LockerModel({numOutfits: 0, outfits: [], favOutfits: [],
                                    wishlist: [], owner: username});
    await locker.save();

    const newUser = new UserModel({firstName, lastName, username,
                                     hashedPassword, model, closet: closet._id, locker: locker._id });
    await newUser.save();
});

router.post("/login", async (req, res) => {
    const {username, password} = req.body;
    const user = await UserModel.findOne({username});
    if (!user) {
        res.json({message: "User Doesn't exists"});
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if(!validPassword) {
        res.json({message: "Incorrect password"});
    }

    res.json({message: "Successfully logged in"});
});

router.put("/update", async (req, res) => {

});

export {router as userRouter};