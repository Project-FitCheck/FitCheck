/* eslint-disable no-unused-vars */
import express from "express";
import { LockerModel } from "../models/Lockers.js"
import { UserModel } from "../models/Users.js";
import { OutfitModel } from "../models/Outfit.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const { userId } = req.query;
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const locker = await LockerModel.findById(user.locker);
        if (!locker) {
            return res.status(404).json({ message: "User's locker doesn't exist" });
        }
        const outfits = await locker.get("outfits");
        return res.status(200).json(outfits);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error: " + err });
    }
});

router.delete("/", async (req, res) => {
    const { userId, Outfit } = req.body
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const locker = await LockerModel.findById(user.locker);
        if (!locker) {
            return res.status(404).json({ message: "User's locker doesn't exist" });
        }
        const fit = locker.outfits.find((x) => {
            return (
				x.head == Outfit.head &&
				x.torso == Outfit.torso &&
				x.legs == Outfit.legs &&
				x.socks == Outfit.socks &&
				x.shoes == Outfit.shoes &&
				x.jewelry == Outfit.jewelry &&
				x.tags == Outfit.tags &&
				x.image == Outfit.image &&
				x.fitName == Outfit.fitName &&
				x.description == Outfit.description
			)
        });
        if (!fit) {
            return res.status(404).json({ message: "Failed to find outfit to remove from locker", Outfit });
        }
        const index = locker.outfits.findIndex((x) => { return x === fit });
        locker.outfits.splice(index, 1);
        locker.numOutfits--;
        await locker.save();
        return res.status(200).json({ message: "Outfit removed from locker" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error: " + err });
    }
});

/*req: {
    userId: userId
    Outfit: {
        head: [list of head clothing items],
        torso: [list of torso clothing items],
        legs: [list of legs clothing items],
        socks: socks clothing item,
        shoes: shoes clothing item,
        jewelery: [list of jewelery clothing items],
        tags: [list of tags associated with outfit],
        image: image of outfit,
    }
}
*/

router.post("/add", async (req, res) => {
    const { userId, Outfit } = req.body
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const locker = await LockerModel.findById(user.locker);
        if (!locker) {
            return res.status(404).json({ message: "User's locker doesn't exist" });
        }
        const newOutfit = new OutfitModel(Outfit);
        locker.outfits.push(newOutfit);
        locker.numOutfits++;
        await locker.save();
        res.status(200).json({ message: "Successfully Added Outfit" })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error: " + err });
    }
});

router.post("/fav", async (req, res) => {
    const { userId, Outfit } = req.body
    try {
        const lockerId = await UserModel.findById(userId);
        if (!lockerId) {
            return res.status(404).json({ message: "User not found" })
        }
        const locker = await LockerModel.findById(lockerId);
        if (!locker) {
            return res.status(404).json({ message: "User's locker doesn't exist" });
        }
        const fit = OutfitModel.findOne(Outfit);
        if (!fit) {
            return res.status(404).json({ message: "Failed to find outfit to add to favorites" });
        }
        locker.favOutfits.push(fit);
        await locker.save();
        return res.status(200).json({ message: "Outfit added to favorites" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error: " + err });
    }
});

router.delete("/fav", async (req, res) => {
    const { userId, Outfit } = req.body
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const locker = await LockerModel.findById(user.locker);
        if (!locker) {
            return res.status(404).json({ message: "User's locker doesn't exist" });
        }
        const fit = locker.outfits.find((x) => {
            return (x.productTitle == locker.productTitle &&
                x.type == locker.type &&
                x.color == locker.color &&
                x.description == locker.description &&
                x.style == locker.style &&
                x.image == locker.image)
        });
        if (!fit) {
            return res.status(404).json({ message: "Failed to find outfit to remove from favorites", Outfit });
        }
        const index = locker.favOutfits.findIndex((x) => { return x === fit });
        locker.favOutfits.splice(index, 1);
        await locker.save();
        return res.status(200).json({ message: "Outfit removed from favorites" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error: " + err });
    }
});

router.post("/wishlist", async (req, res) => {
    const { userId, Outfit } = req.body;
    try {
        const lockerId = await UserModel.findById(userId);
        if (!lockerId) {
            return res.status(404).json({ message: "User not found" })
        }
        const locker = await LockerModel.findById(lockerId);
        if (!locker) {
            return res.status(404).json({ message: "User's locker doesn't exist" });
        }
        const fit = OutfitModel.findOne(Outfit);
        if (!fit) {
            return res.status(404).json({ message: "Failed to find outfit to add to wishlist" });
        }
        locker.wishlist.push(fit);
        await locker.save();
        return res.status(200).json({ message: "Outfit added to wishlist" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error: " + err });
    }
});

router.delete("/wishlist", async (req, res) => {
    const { userId, Outfit } = req.body;
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const locker = await LockerModel.findById(user.locker);
        if (!locker) {
            return res.status(404).json({ message: "User's locker doesn't exist" });
        }
        const fit = OutfitModel.findOneAndDelete({ Outfit });
        if (!fit) {
            return res.status(404).json({ message: "Failed to find outfit to remove from wishlist" });
        }
        const index = Outfit.wishlist.findIndex((x) => { return x === fit });
        locker.wishlist.splice(index, 1);
        await locker.save();
        return res.status(200).json({ message: "Outfit removed from wishlist" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error: " + err });
    }
});

export { router as lockerRouter };