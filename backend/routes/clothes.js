import express from "express";
import { ClothesModel } from "../models/Clothes.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const clothes = await ClothesModel.find({});
        return res.status(200).json(clothes);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error: " + err });
    }
});

export { router as clothesRouter }