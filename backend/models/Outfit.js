import mongoose from "mongoose";
import Clothes from "./Clothes";

const OutfitSchema = new mongoose.Schema({
    head: [Clothes.schema],
    torso: [Clothes.schema],
    legs: [Clothes.schema],
    socks: Clothes.schema,
    shoes: Clothes.schema,
    jewelery: [Clothes.schema],
    tags: [String]
});

const OutfitModel = mongoose.model('Outfit', OutfitSchema);
module.exports = OutfitModel;