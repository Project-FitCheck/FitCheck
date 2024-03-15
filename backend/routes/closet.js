/* eslint-disable no-unused-vars */
import express from "express";
import { ClosetModel } from "../models/Closets";

const router = express.Router();

/*req: {
    user: closet_id
}
*/
router.get("/closet", async (req, res) => {
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
router.post("/closet/add", async (req, res) => {
    const { closetId, clothingItem } = req.body
    var closet = await ClosetModel.findById(closetId);
    closet.clothes.push(clothingItem);
    await closet.save();
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
    closet.favClothes.push(clothingItem);
    await closet.save();
});

export { router as closetRouter };