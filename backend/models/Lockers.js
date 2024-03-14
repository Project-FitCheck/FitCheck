import mongoose from "mongoose";
import OutfitModel from "./Outfit"
const LockerSchema = new mongoose.Schema({
    numOutfits: {
        type: Number,
        required: true,
        default: 0
    },

    favOutfits: [Outfit.schema],
    outfits: [Outfit.schema],
    wishlist: [Outfit.schema],
    owner: String
});

const LockerModel = mongoose.model('Locker', LockerSchema);
export {LockerModel};
