const mongoose = require('mongoose');

const Clothes = require("./Clothes")

const OutfitSchema = new mongoose.Schema({
    head: Clothes.schema,
    torso: Clothes.schema,
    legs: Clothes.schema,
    feet: Clothes.schema,
    jewelery: [Clothes.schema],
    tags: [String]
});

const Outfits = mongoose.model('Outfit', OutfitSchema);
module.exports = Outfits;