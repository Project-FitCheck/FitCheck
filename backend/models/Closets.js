const mongoose = require("mongoose")
const Clothes = require("./Clothes")

const ClosetSchema = new mongoose.Schema({
    numClothes: {
        type: Number,
        required: true,
        default: 0,
    },
    favClothes: [Clothes.schema],
    clothes: [Clothes.schema],
    wishlist: [Clothes.schema]
});

const ClosetModel = mongoose.model("Closet", ClosetSchema);
module.exports = ClosetModel
