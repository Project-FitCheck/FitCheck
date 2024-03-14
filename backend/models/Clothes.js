import mongoose from "mongoose";

const clothesSchema = new mongoose.Schema({
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
});

const ClothesModel = mongoose.model('Clothe', clothesSchema);

module.exports = ClothesModel;