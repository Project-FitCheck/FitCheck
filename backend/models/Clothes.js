import mongoose from "mongoose";

const clothesSchema = new mongoose.Schema({
    productTitle: String,
    type: String,
    color: String,
    //size: String,
    description: String,
    //material: String,
    //brand: String,
    //price: Number,
    //fit: String,
    style: String,
    gender: String,
    image: String,
});

const ClothesModel = mongoose.model('Clothe', clothesSchema);

export { ClothesModel };