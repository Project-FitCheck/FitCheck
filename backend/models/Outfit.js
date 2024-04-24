import mongoose from "mongoose";
import { ClothesModel } from "./Clothes.js";

const OutfitSchema = new mongoose.Schema({
    head: ClothesModel.schema,
    torso: ClothesModel.schema,
    legs: ClothesModel.schema,
    socks: ClothesModel.schema,
    shoes: ClothesModel.schema,
    jewelery: ClothesModel.schema,
    tags: [String],
    image: String,
    fitName: String,
    description: String
});

const OutfitModel = mongoose.model('Outfit', OutfitSchema);
export { OutfitModel };