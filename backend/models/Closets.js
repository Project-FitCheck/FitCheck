import mongoose from "mongoose";
import ClothesModel from "./Clothes";

const ClosetSchema = new mongoose.Schema({
    numClothes: {
        type: Number,
        required: true,
        default: 0,
    },

    favClothes: [Clothes.schema],
    clothes: [Clothes.schema],
    wishlist: [Clothes.schema],
    owner: String
});

const ClosetModel = mongoose.model("Closet", ClosetSchema);
export {ClosetModel}
