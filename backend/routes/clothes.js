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
        res.status(200).json({ message: "successfully added clothing to catalog" })
    } catch (err) {
        res.json(500).json({ message: "internal server error" });
    }
});

router.delete("/", async (req, res) => {
    const clothingItem = req.body;
    try {
        //const clothes = await ClothesModel.find({});
        await ClothesModel.deleteOne(clothingItem)       
        //await clothes.;
        /* const item = clothes.find((x) => {
            return (x.productTitle == clothingItem.productTitle &&
                x.type == clothingItem.type &&
                x.color == clothingItem.color &&
                x.description == clothingItem.description &&
                x.style == clothingItem.style &&
                x.image == clothingItem.image)
        });
        if (!item) {
            return res.status(404).json({ message: "Failed to find article of clothing to remove from closet", clothingItem });
        }
        const index = closet.clothes.findIndex((x) => { return x === item });
        closet.clothes.splice(index, 1);
        closet.numClothes--;
        await closet.save(); */
        return res.status(200).json({message: "successfully deleted: " + clothingItem});
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error: " + err });
    }
});

export { router as clothesRouter }