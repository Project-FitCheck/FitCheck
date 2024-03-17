import mongoose from "mongoose";
import OutfitModel from "./Outfit"
const LockerSchema = new mongoose.Schema({
    numOutfits: {
        type: Number,
        required: true,
        default: 0
    },

    favOutfits: [OutfitModel.schema],
    outfits: [OutfitModel.schema],
    wishlist: [OutfitModel.schema],
    owner: String
});

const LockerModel = mongoose.model('Locker', LockerSchema);
export { LockerModel };
