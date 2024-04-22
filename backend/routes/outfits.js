import express from "express";
import { OutfitModel } from "../models/Outfit.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const outfits = await OutfitModel.find({});
        return res.status(200).json(outfits);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error: " + err });
    }
});

export { router as outfitsRouter }