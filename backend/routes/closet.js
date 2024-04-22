/* eslint-disable no-unused-vars */
import express from "express";
import { ClosetModel } from "../models/Closets.js";
import { ClothesModel } from "../models/Clothes.js";
import { UserModel } from "../models/Users.js";

const router = express.Router();

/*req: {
    user: closet_id
}
*/
router.get("/", async (req, res) => {
    const { userId } = req.query;
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const closet = await ClosetModel.findById(user.closet);
        if (!closet) {
            return res.status(404).json({ message: "User's closet doesn't exist" });
        }
        const clothes = await closet.get("clothes");
        return res.status(200).json(clothes);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error: " + err });
    }
});

router.delete("/", async (req, res) => {
    const { userId, clothingItem } = req.body
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const closet = await ClosetModel.findById(user.closet);
        if (!closet) {
            return res.status(404).json({ message: "User's closet doesn't exist" });
        }
        const item = closet.clothes.find((x) => {
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
        await closet.save();
        return res.status(200).json({ message: "Clothing item removed from closet" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error: " + err });
    }
});
/*req: {
    userId: userId
    clothing_item: {
        productTitle: { type: String, required: true },
        type: { type: String, required: true },
        color: String,
        description: String,
        style: String,
        image: image of piece of clothing
    }
}
*/
router.post("/add", async (req, res) => {
    const { userId, clothingItem } = req.body
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const closet = await ClosetModel.findById(user.closet);
        if (!closet) {
            return res.status(404).json({ message: "User's closet doesn't exist" });
        }
        const newClothingItem = new ClothesModel(clothingItem);
        await newClothingItem.save();
        closet.clothes.push(newClothingItem);
        closet.numClothes++;
        await closet.save();
        res.status(200).json({ message: "Successfully Added " + clothingItem.type })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error: " + err });
    }
});

/*req: {
    userId: userId
    clothing_item: {
        productTitle: { type: String, required: true },
        type: { type: String, required: true },
        color: String,
        description: String,
        style: String,
        image: image of piece of clothing
    }
}
*/

router.post("/fav", async (req, res) => {
    const { userId, clothingItem } = req.body
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const closet = await ClosetModel.findById(user.closet);
        if (!closet) {
            return res.status(404).json({ message: "User's closet doesn't exist" });
        }
        const item = closet.clothes.find((x) => {
            return (x.productTitle == clothingItem.productTitle &&
                x.type == clothingItem.type &&
                x.color == clothingItem.color &&
                x.description == clothingItem.description &&
                x.style == clothingItem.style &&
                x.image == clothingItem.image)
        });
        if (!item) {
            return res.status(404).json({ message: "Failed to find article of clothing to add to favorites", clothingItem });
        }
        closet.favClothes.push(item);
        await closet.save();
        return res.status(200).json({ message: "Clothing item added to favorites" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error: " + err });
    }
});

router.delete("/fav", async (req, res) => {
    const { userId, clothingItem } = req.body
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const closet = await ClosetModel.findById(user.closet);
        if (!closet) {
            return res.status(404).json({ message: "User's closet doesn't exist" });
        }
        const item = closet.clothes.find((x) => {
            return (x.productTitle == clothingItem.productTitle &&
                x.type == clothingItem.type &&
                x.color == clothingItem.color &&
                x.description == clothingItem.description &&
                x.style == clothingItem.style &&
                x.image == clothingItem.image)
        });
        if (!item) {
            return res.status(404).json({ message: "Failed to find article of clothing to remove from favorites", clothingItem });
        }
        const index = closet.favClothes.findIndex((x) => { return x === item });
        closet.favClothes.splice(index, 1);
        await closet.save();
        return res.status(200).json({ message: "Clothing item removed from favorites" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error: " + err });
    }
});

/*req: {
    userId: userId
    clothing_item: {
        productTitle: { type: String, required: true },
        type: { type: String, required: true },
        color: String,
        description: String,
        style: String,
        image: image of piece of clothing
    }
}
*/

router.post("/wishlist", async (req, res) => {
    const { userId, clothingItem } = req.body;
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const closet = await ClosetModel.findById(user.closet);
        if (!closet) {
            return res.status(404).json({ message: "User's closet doesn't exist" });
        }
        const item = ClothesModel.findOne({ clothingItem });
        if (!item) {
            return res.status(404).json({ message: "Failed to find article of clothing to add to wishlist" });
        }
        closet.wishlist.push(item);
        await closet.save();
        return res.status(200).json({ message: "Clothing item added to wishlist" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error: " + err });
    }
});

router.delete("/wishlist", async (req, res) => {
    const { userId, clothingItem } = req.body;
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const closet = await ClosetModel.findById(user.closet);
        if (!closet) {
            return res.status(404).json({ message: "User's closet doesn't exist" });
        }
        const item = ClothesModel.findOneAndDelete({ clothingItem });
        if (!item) {
            return res.status(404).json({ message: "Failed to find article of clothing to remove from wishlist" });
        }
        const index = closet.wishlist.findIndex((x) => { return x === item });
        closet.wishlist.splice(index, 1);
        await closet.save();
        return res.status(200).json({ message: "Clothing item removed from wishlist" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error: " + err });
    }
});

export { router as closetRouter };