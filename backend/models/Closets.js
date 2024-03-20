import mongoose from "mongoose";
import {ClothesModel} from "./Clothes.js";

const ClosetSchema = new mongoose.Schema({
    numClothes: {
        type: Number,
        required: true,
        default: 0,
    },

    favClothes: [ClothesModel.schema],
    clothes: [ClothesModel.schema],
    wishlist: [ClothesModel.schema],
    owner: String
});

const ClosetModel = mongoose.model("Closet", ClosetSchema);
export { ClosetModel }
