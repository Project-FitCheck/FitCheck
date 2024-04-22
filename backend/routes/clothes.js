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
/*
req{
    clothing: {
        productTitle: ,
        type: ,
        color: ,
        description: ,
        style: ,
        gender: ,
        image: ,
    }
}
*/
router.post("/", async (req, res) => {
    const clothing = req.body;
    try {
        //const clothes = ClothesModel;
        await ClothesModel.create(clothing);
        res.status(200).json({message: "successfully added clothing to catalog"})
    } catch (err) {
        res.json(500).json({ message: "internal server error" });
    }
})

export { router as clothesRouter }