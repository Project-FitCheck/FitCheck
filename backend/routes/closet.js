/* eslint-disable no-unused-vars */
import express from "express";
import { ClosetModel } from "../models/Closets.js";
import { ClothesModel } from "../models/Clothes.js";

const router = express.Router();

/*req: {
    user: closet_id
}
*/
router.get("/", async (req, res) => {
    const closetId = req.body;
    const closet = await ClosetModel.findById(closetId);
    const clothes = await closet.get("clothes");
    res.json({ clothes });
});

/*req: {
    closetid: closet_id
    clothing_item: {
        productTitle: { type: String, required: true },
        type: { type: String, required: true },
        color: String,
        size: String,
        description: String,
        material: String,
        brand: String,
        price: Number,
        fit: String,
        style: String
    }
}
*/
router.post("/add", async (req, res) => {
    const { closetId, clothingItem } = req.body
    
    var closet = await ClosetModel.findById(closetId);
    const newClothingItem = new ClothesModel(clothingItem);
    closet.clothes.push(newClothingItem);
    closet.numClothes++;
    await closet.save();
    res.status(200).json({message: "Successfully Added " + clothingItem.type})
});

/*req: {
    closetid: closet_id
    clothing_item: {
        productTitle: { type: String, required: true },
        type: { type: String, required: true },
        color: String,
        size: String,
        description: String,
        material: String,
        brand: String,
        price: Number,
        fit: String,
        style: String
    }
}
*/

router.post("/closet", async (req, res) => {
    const { closetId, clothingItem } = req.body
    var closet = await ClosetModel.findById(closetId);
    closet.
    closet.favClothes.push(clothingItem);
    await closet.save();
    res.status(200).json("Clothing item added to favorites");
});

export { router as closetRouter };